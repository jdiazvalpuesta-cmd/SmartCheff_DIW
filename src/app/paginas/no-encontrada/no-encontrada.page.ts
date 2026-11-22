import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonRouterLink } from '@ionic/angular';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-no-encontrada',
  templateUrl: './no-encontrada.page.html',
  styleUrls: ['./no-encontrada.page.scss'],
  imports: [IonContent, IonButton, RouterLink, IonRouterLink, EstadoVacioComponent],
})
export class NoEncontradaPage {}
