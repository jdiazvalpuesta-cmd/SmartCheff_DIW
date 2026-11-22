import { Component, computed, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem,
         IonCheckbox, IonNote, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonButton } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-compras',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem,
            IonCheckbox, IonNote, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonButton, EstadoVacioComponent],
  templateUrl: './compras.page.html',
  styleUrl: './compras.page.scss',
})
export class ComprasPage {
  estado = inject(EstadoService);
  vista = signal<'pendientes' | 'comprados'>('pendientes');
  pendientes = computed(() => this.estado.compras().filter(c => !c.comprado));
  comprados = computed(() => this.estado.compras().filter(c => c.comprado));
  lista = computed(() => this.vista() === 'pendientes' ? this.pendientes() : this.comprados());

  anadir(buscador: { value?: string | null }) { this.estado.anadirCompra(buscador.value ?? ''); buscador.value = ''; }
  vaciarComprados() { this.comprados().forEach(c => this.estado.quitarCompra(c.id)); }
}
