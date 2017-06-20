import { LightsHandler } from './../../providers/canbus/handlers/lights';
import { MFSWHandler } from './../../providers/canbus/handlers/mfsw';
import { CanbusProvider } from './../../providers/canbus/canbus';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, canbus: CanbusProvider, mfsw: MFSWHandler, lights: LightsHandler) 
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }

}
