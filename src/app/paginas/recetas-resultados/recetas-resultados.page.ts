import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';
import { RecetaTarjetaComponent } from '../../componentes/receta-tarjeta/receta-tarjeta.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-recetas-resultados',
  templateUrl: './recetas-resultados.page.html',
  styleUrls: ['./recetas-resultados.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, RouterLink, IonRouterLink,
            RecetaTarjetaComponent, EstadoVacioComponent],
})
export class RecetasResultadosPage {
  estado = inject(EstadoService);
}
