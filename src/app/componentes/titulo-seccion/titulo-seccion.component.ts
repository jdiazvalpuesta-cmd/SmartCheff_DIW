import { Component, input } from '@angular/core';

/** Título de sección con un hueco (ng-content) a la derecha para un enlace o botón. */
@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html',
  styleUrl: './titulo-seccion.component.scss',
})
export class TituloSeccionComponent {
  titulo = input.required<string>();
  subtitulo = input('');
}
