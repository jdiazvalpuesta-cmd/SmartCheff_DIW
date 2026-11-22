import { Component, computed, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton,
         IonLabel, IonList, IonItem, IonNote, IonButton, IonIcon, IonBadge } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { TituloSeccionComponent } from '../../componentes/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-despensa',
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton,
            IonLabel, IonList, IonItem, IonNote, IonButton, IonIcon, IonBadge, EstadoVacioComponent, TituloSeccionComponent],
  templateUrl: './despensa.page.html',
  styleUrl: './despensa.page.scss',
})
export class DespensaPage {
  estado = inject(EstadoService);
  categorias = ['Todos', 'Frescos', 'Despensa', 'Lácteos'];
  q = signal(''); cat = signal('Todos');
  filtrados = computed(() => this.estado.despensa().filter(i =>
    (this.cat() === 'Todos' || i.categoria === this.cat()) && i.nombre.toLowerCase().includes(this.q().toLowerCase())));
}
