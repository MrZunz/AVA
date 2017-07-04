import { CanbusProvider } from './../../providers/canbus/canbus';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Frame, Byte } from '../../models/canbus';

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
  // frames: Object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, canbus: CanbusProvider) {
    this.canbus = canbus;

    // this.canbus.frameData.subscribe((data) => {
    //   //console.log(frame);
    //   let frame = this.canbus.frameFromData(data);
    //   this.frames[frame.id.value as number] = frame;
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanbusPage');
  }

}
