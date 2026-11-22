import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonAvatar, IonList, IonItem, IonIcon, IonLabel,
         IonToggle, IonNote, IonRouterLink } from '@ionic/angular';
import { EstadoService } from '../../servicios/estado.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonAvatar, IonList, IonItem, IonIcon, IonLabel,
            IonToggle, IonNote, RouterLink, IonRouterLink],
})
export class PerfilPage {
  estado = inject(EstadoService);
  oscuro = signal(document.documentElement.classList.contains('ion-palette-dark'));

  alternarOscuro(activo: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', activo);
    this.oscuro.set(activo);
  }
}
