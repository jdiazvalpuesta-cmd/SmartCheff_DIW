import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonAvatar, IonSegment, IonSegmentButton, IonLabel, IonFab, IonFabButton,
         IonIcon, IonModal, IonButtons, IonButton, IonInput, IonSelect, IonSelectOption, IonDatetime, IonToggle, IonNote,
         IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { RecetaTarjetaComponent } from '../../componentes/receta-tarjeta/receta-tarjeta.component';
import { TituloSeccionComponent } from '../../componentes/titulo-seccion/titulo-seccion.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-mi-espacio',
  templateUrl: './mi-espacio.page.html',
  styleUrls: ['./mi-espacio.page.scss'],
  imports: [FormsModule, RouterLink, IonRouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonAvatar, IonSegment, IonSegmentButton,
            IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonButtons, IonButton, IonInput, IonSelect, IonSelectOption,
            IonDatetime, IonToggle, IonNote, RecetaTarjetaComponent, TituloSeccionComponent, EstadoVacioComponent],
})
export class MiEspacioPage {
  estado = inject(EstadoService);
  vista = signal<'colecciones' | 'historial'>('colecciones');
  modalRegistro = signal(false);
  modalColeccion = signal(false);

  // Campos del formulario "¿Qué cocinaste?" (select, datetime, input y toggle)
  recetaId: number | null = null;
  fecha = new Date().toISOString();
  nota = '';
  repetir = true;
  nombreColeccion = '';

  guardarRegistro() {
    if (!this.recetaId) return;
    this.estado.registrar(this.recetaId, this.fecha, this.nota);
    this.recetaId = null;
    this.nota = '';
    this.modalRegistro.set(false);
  }
  crearColeccion() {
    this.estado.nuevaColeccion(this.nombreColeccion);
    this.nombreColeccion = '';
    this.modalColeccion.set(false);
  }
}
