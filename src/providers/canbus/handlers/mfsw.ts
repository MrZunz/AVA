import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Frame, Byte } from '../../../models/canbus';
import { MFSWButton } from "../../../models/car/mfswbutton";

@Injectable()
export class MFSWHandler {

  private readonly id: Number = 0x5C1;
  private lastButtonPressed : MFSWButton;

  constructor(public events: Events) {
    events.subscribe('canbus:frame', frame => {
      if(frame.id.value == this.id) {

        this.parse(frame);
      }
    })
  }

  parse(frame: Frame) {
    // console.log('MFSWHandler:parse:', frame);
    if(this.lastButtonPressed != frame.a.value) {
      this.lastButtonPressed = frame.a.value as MFSWButton;
      console.log('MFSWHandler:lastButtonPressed:', this.lastButtonPressed);
    }
    
  }
}
