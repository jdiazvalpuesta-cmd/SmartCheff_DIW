import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonChip, IonButton, IonIcon, IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { INGREDIENTES } from '../../datos/recetas';
import { Filtro } from '../../modelos/receta';
import { ChipIngredienteComponent } from '../../componentes/chip-ingrediente/chip-ingrediente.component';
import { TituloSeccionComponent } from '../../componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-cocinar',
  templateUrl: './cocinar.page.html',
  styleUrls: ['./cocinar.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonChip, IonButton, IonIcon, RouterLink, IonRouterLink,
            ChipIngredienteComponent, TituloSeccionComponent],
})
export class CocinarPage {
  estado = inject(EstadoService);
  busqueda = signal('');
  filtros: { id: Filtro; nombre: string }[] = [
    { id: 'vegetariano', nombre: 'Vegetariano' },
    { id: 'sin-gluten', nombre: 'Sin Gluten' },
    { id: 'rapido', nombre: 'Rápido (< 20m)' },
    { id: 'economico', nombre: 'Económico' },
  ];
  visibles = computed(() => INGREDIENTES.filter((i) => i.nombre.toLowerCase().includes(this.busqueda().toLowerCase())));
}
