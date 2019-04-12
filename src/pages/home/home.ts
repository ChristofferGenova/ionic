import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout() {
    this.navCtrl.push('AboutPage', {
      id: 12
    });
  }

  onLifeCycle() {
    this.navCtrl.push('LifecyleEventsPage').then(() => {
      console.log('Página carregada');
    }).catch(error => {
      console.log('Acesso não autorizado', error);
    })
  }
}
