import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonRouterLink } from '@ionic/angular';

/** Pantalla completa (sin menú inferior). */
@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.page.html',
  styleUrls: ['./suscripciones.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonSegment, IonSegmentButton, IonLabel,
            RouterLink, IonRouterLink],
})
export class SuscripcionesPage {
  plan = signal<'mensual' | 'anual'>('anual');
  ventajas = ['Recetas ilimitadas según tu despensa', 'Listas de compras automáticas', 'Colecciones favoritas sin límite', 'Informe semanal de ahorro'];
}
