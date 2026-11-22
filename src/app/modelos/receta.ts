export type Dificultad = 'Fácil' | 'Media' | 'Difícil';
export type Filtro = 'vegetariano' | 'sin-gluten' | 'rapido' | 'economico';

export interface Ingrediente { id: string; nombre: string; emoji: string; }
export interface LineaReceta { id: string; nombre: string; cantidad: string; }

export interface Receta {
  id: number;
  titulo: string;
  foto: string;
  minutos: number;
  porciones: number;
  dificultad: Dificultad;
  etiquetas: Filtro[];
  ingredientes: LineaReceta[];
  pasos: string[];
}

export interface ItemDespensa {
  id: string; nombre: string; categoria: 'Frescos' | 'Despensa' | 'Lácteos';
  cantidad: number; unidad: string; caducaEnDias: number;
}
export interface ItemCompra { id: string; nombre: string; cantidad: string; comprado: boolean; }
export interface Coleccion { id: number; nombre: string; recetas: number[]; }
export interface Registro { id: number; fecha: string; recetaId: number; nota: string; ahorro?: string; }
