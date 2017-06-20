import { CanbusProvider } from './../../providers/canbus/canbus';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CanbusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canbus',
  templateUrl: 'canbus.html',
})
export class CanbusPage {

  canbus : CanbusProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, canbus: CanbusProvider) {
    this.canbus = canbus;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanbusPage');
  }

}
