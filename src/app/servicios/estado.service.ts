import { Injectable, computed, signal } from '@angular/core';
import { Coleccion, Filtro, ItemCompra, ItemDespensa, Receta, Registro } from '../modelos/receta';
import { DESPENSA_INICIAL, RECETAS } from '../datos/recetas';

const iso = (d: Date) => d.toISOString().slice(0, 10);
const hace = (n: number) => { const d = new Date(); d.setDate(d.getDate() - n); return iso(d); };

/** Estado compartido (en memoria): se pierde al recargar, como pide la Entrega 1. */
@Injectable({ providedIn: 'root' })
export class EstadoService {
  readonly recetas = RECETAS;
  despensa = signal<ItemDespensa[]>(DESPENSA_INICIAL);
  tengo = signal<string[]>([...DESPENSA_INICIAL.map(i => i.id), 'pan']);
  filtros = signal<Filtro[]>([]);
  compras = signal<ItemCompra[]>([]);
  colecciones = signal<Coleccion[]>([
    { id: 1, nombre: 'Cenas rápidas (<15m)', recetas: [1, 3] },
    { id: 2, nombre: 'Aprovechamiento total', recetas: [2, 4] },
  ]);
  historial = signal<Registro[]>([
    { id: 1, fecha: hace(0), recetaId: 1, nota: '', ahorro: 'Ahorro: 600g CO2' }, { id: 2, fecha: hace(2), recetaId: 4, nota: 'Me sobró arroz', ahorro: 'Ahorro: 320g CO2' },
    { id: 3, fecha: hace(4), recetaId: 3, nota: '', ahorro: 'Ahorro: 500g CO2' },
  ]);

  porCaducar = computed(() => this.despensa().filter(i => i.caducaEnDias <= 3).sort((a, b) => a.caducaEnDias - b.caducaEnDias));

  /** Recetas ordenadas por % de ingredientes que ya tengo, aplicando los filtros. */
  resultados = computed(() => {
    const f = this.filtros();
    return this.recetas
      .filter(r => f.every(x => this.cumple(r, x)))
      .map(r => ({ receta: r, ...this.coincidencia(r) }))
      .filter(x => x.pct > 0)
      .sort((a, b) => b.pct - a.pct);
  });

  private cumple(r: Receta, f: Filtro) { return f === 'rapido' ? r.minutos <= 20 : r.etiquetas.includes(f); }

  coincidencia(r: Receta) {
    const t = this.tengo();
    const tengo = r.ingredientes.filter(i => t.includes(i.id)).length;
    return { tengo, total: r.ingredientes.length, pct: Math.round((100 * tengo) / r.ingredientes.length) };
  }
  receta(id: number | string) { return this.recetas.find(r => r.id === +id); }

  toggleTengo(id: string) { this.tengo.update(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]); }
  toggleFiltro(f: Filtro) { this.filtros.update(l => l.includes(f) ? l.filter(x => x !== f) : [...l, f]); }

  /** Lista de compras automática: lo que le falta a la receta. Devuelve cuántos añadió. */
  anadirFaltantes(r: Receta) {
    const t = this.tengo(); const ya = this.compras().map(c => c.id);
    const nuevos = r.ingredientes.filter(i => !t.includes(i.id) && !ya.includes(i.id))
      .map(i => ({ id: i.id, nombre: i.nombre, cantidad: i.cantidad, comprado: false }));
    this.compras.update(l => [...l, ...nuevos]);
    return nuevos.length;
  }
  anadirCompra(nombre: string) {
    const n = nombre.trim(); if (!n) return;
    this.compras.update(l => [...l, { id: 'm' + Date.now(), nombre: n, cantidad: '', comprado: false }]);
  }
  toggleCompra(id: string) { this.compras.update(l => l.map(c => c.id === id ? { ...c, comprado: !c.comprado } : c)); }
  quitarCompra(id: string) { this.compras.update(l => l.filter(c => c.id !== id)); }

  cambiarCantidad(id: string, delta: number) {
    this.despensa.update(l => l.map(i => i.id === id ? { ...i, cantidad: Math.max(0, i.cantidad + delta) } : i));
  }

  coleccionDe(recetaId: number) { return this.colecciones().find(c => c.recetas.includes(recetaId))?.id ?? 0; }
  guardarEn(recetaId: number, coleccionId: number) {
    this.colecciones.update(l => l.map(c => ({
      ...c, recetas: c.id === coleccionId ? [...new Set([...c.recetas, recetaId])] : c.recetas.filter(r => r !== recetaId),
    })));
  }
  esFavorita(id: number) { return this.colecciones().some(c => c.recetas.includes(id)); }
  nuevaColeccion(nombre: string) {
    if (nombre.trim()) this.colecciones.update(l => [...l, { id: Date.now(), nombre: nombre.trim(), recetas: [] }]);
  }

  registrar(recetaId: number, fecha: string, nota: string) {
    this.historial.update(l => [...l, { id: Date.now(), fecha: (fecha || iso(new Date())).slice(0, 10), recetaId, nota }]);
  }
  /** Historial de los últimos 7 días, agrupado por día. */
  semana = computed(() => {
    const dias = Array.from({ length: 7 }, (_, n) => hace(n));
    return dias.map(f => ({ fecha: f, registros: this.historial().filter(r => r.fecha === f) })).filter(d => d.registros.length);
  });
}
