import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';

/** Estado vacío de las listas. El hueco (ng-content) admite un botón de acción. */
@Component({
  selector: 'app-estado-vacio',
  imports: [IonIcon],
  templateUrl: './estado-vacio.component.html',
  styleUrl: './estado-vacio.component.scss',
})
export class EstadoVacioComponent {
  icono = input('restaurant-outline');
  titulo = input.required<string>();
  mensaje = input('');
}
