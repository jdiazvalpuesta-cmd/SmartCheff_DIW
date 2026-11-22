import { Component, input, output } from '@angular/core';
import { IonChip, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-chip-ingrediente',
  imports: [IonChip, IonIcon],
  templateUrl: './chip-ingrediente.component.html',
  styleUrl: './chip-ingrediente.component.scss',
})
export class ChipIngredienteComponent {
  nombre = input.required<string>();
  emoji = input('');
  activo = input(false);
  alternar = output<void>();
}
