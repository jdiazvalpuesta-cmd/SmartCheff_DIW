import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonInput, IonInputPasswordToggle, IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonButton, IonInput, IonInputPasswordToggle, RouterLink, IonRouterLink],
})
export class LoginPage {}
