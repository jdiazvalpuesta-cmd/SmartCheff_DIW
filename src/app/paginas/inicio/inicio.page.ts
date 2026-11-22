import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonChip, IonAvatar, IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { RecetaTarjetaComponent } from '../../componentes/receta-tarjeta/receta-tarjeta.component';
import { TituloSeccionComponent } from '../../componentes/titulo-seccion/titulo-seccion.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonChip, IonAvatar, RouterLink, IonRouterLink,
            RecetaTarjetaComponent, TituloSeccionComponent, EstadoVacioComponent],
})
export class InicioPage {
  estado = inject(EstadoService);
}
