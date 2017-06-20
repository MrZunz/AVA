import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Frame, Byte } from '../../../models/canbus';

@Injectable()
export class LightsHandler {

  private readonly id: Number = 0x531;
  private light: Number;

  constructor(public events: Events) {
    events.subscribe('canbus:frame', frame => {
      if(frame.id.value == this.id) {

        this.parse(frame);
      }
    })
  }

  parse(frame: Frame) {
    //console.log('LightsHandler:parse:', frame);
    if(this.light != frame.a.value) {
      this.light = frame.a.value;
      console.log('LightsHandler:parse:', this.light);
    }
  }
}
