import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public config: Config,
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  configTest() {
    console.log(this.config.getModeConfig('ios'))
  }

}
