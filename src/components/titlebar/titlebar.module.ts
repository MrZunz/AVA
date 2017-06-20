import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitlebarComponent } from './titlebar';

@NgModule({
  declarations: [
    TitlebarComponent,
  ],
  imports: [
    IonicPageModule.forChild(TitlebarComponent),
  ],
  exports: [
    TitlebarComponent
  ]
})
export class TitlebarComponentModule {}
