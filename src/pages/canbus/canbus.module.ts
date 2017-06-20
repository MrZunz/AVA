import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanbusPage } from './canbus';

@NgModule({
  declarations: [
    CanbusPage,
  ],
  imports: [
    IonicPageModule.forChild(CanbusPage),
  ],
  exports: [
    CanbusPage
  ]
})
export class CanbusPageModule {}
