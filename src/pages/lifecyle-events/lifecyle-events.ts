import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'LifecyleEventsPage',
  segment: 'lifecycle/',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-lifecyle-events',
  templateUrl: 'lifecyle-events.html',
})
export class LifecyleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Ordem dos LifeCycles Events

  /*
  * Responsáveis pela entrada da página
  */

  ionViewCanEnter(): Promise<any> {
    // Aguarda a entrada da página
    console.log('ionViewCanEnter');
    // return true;

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos para entrar...')

      // Se o numero random for par, irá ser permitido entrar na página
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if (number % 2 == 0) {
          resolve();
          console.log(`${number} - Autorizado!`);
        } else {
          reject();
          console.log(`${number} - Não autorizado!`);
        }
      }, 2000);
    })
  }

  ionViewDidLoad() {
    // Página carregada em cache
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    // Quando a página está prestes a ser exibida
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    // É chamado quando a página está carregada
    console.log('ionViewDidEnter');
  }

  /*
  * Responsáveis pela saida da página
  */

  ionViewCanLeave(): Promise<any> {
    // Verifica se tem a permissão de sair da página
    console.log('ionViewCanLeave');
    // return true

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos para entrar...')

      // Se o numero random for par, irá ser permitido entrar na página
      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if (number % 2 == 0) {
          resolve();
          console.log(`${number} - Autorizado!`);
        } else {
          reject();
          console.log(`${number} - Não autorizado!`);
        }
      }, 2000);
    })
  }

  ionViewWillLeave() {
    // Quando a página está prestes a sair
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    // Quando já saiu completamente da página
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    // Executado logo após o DidLeave e destroi a página
    console.log('ionViewWillUnload');
  }

  onPop() {
    this.navCtrl.pop()

    // .then(() => {
    //   console.log('Página Destruida')
    // }).catch(error => {
    //   console.log('Saída não autorizada', error)
    // })
  }
}
