import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonIcon } from '@ionic/angular';
import { Receta } from '../../modelos/receta';

/** Tarjeta de receta. Variante "grande" (foto arriba) o "compacta" (foto a la izquierda). */
@Component({
  selector: 'app-receta-tarjeta',
  imports: [RouterLink, IonCard, IonIcon],
  templateUrl: './receta-tarjeta.component.html',
  styleUrl: './receta-tarjeta.component.scss',
})
export class RecetaTarjetaComponent {
  receta = input.required<Receta>();
  pct = input<number | null>(null);
  favorita = input(false);
  variante = input<'grande' | 'compacta'>('grande');
}
