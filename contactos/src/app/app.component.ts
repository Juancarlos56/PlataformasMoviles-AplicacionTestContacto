import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listar', url: '/contactos/listado', icon: 'list-circle' },
    //{ title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    //{ title: 'Bandeja', url: '/folder/Outbox', icon: 'american-football' },
    { title: 'Acerca de', url: '/acercade', icon: 'apps' },
    //{ title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    //{ title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public nombre = "Juan Barrera"
  constructor(public alertController: AlertController) {}

  
  async handleButtonClick() {
    const alert = await this.alertController.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });

    await alert.present();
  }
  

}
