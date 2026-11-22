import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote,
         IonSelect, IonSelectOption, IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { TituloSeccionComponent } from '../../componentes/titulo-seccion/titulo-seccion.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonList, IonItem, IonLabel, IonNote,
            IonSelect, IonSelectOption, RouterLink, IonRouterLink, TituloSeccionComponent, EstadoVacioComponent],
})
export class RecetaDetallePage {
  id = input<string>(); // llega desde la ruta recetas/:id (withComponentInputBinding)
  estado = inject(EstadoService);
  receta = computed(() => {
    const id = this.id();
    return id ? this.estado.receta(id) : undefined;
  });
  faltan = computed(() => {
    const r = this.receta();
    return r ? r.ingredientes.length - this.estado.coincidencia(r).tengo : 0;
  });
  anadir() {
    const r = this.receta();
    if (r) this.estado.anadirFaltantes(r);
  }
}
