import { SocketProvider } from './../socket/socket';
import { Injectable, NgZone } from '@angular/core';
import { Events } from 'ionic-angular';
import { Frame, Byte } from '../../models/canbus';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class CanbusProvider {

  frames: Object = {};
  framesToDisplay: Object = {};
  numberOfFramesPerSecond = 0;

  constructor(public events: Events, public socket: SocketProvider, public zone: NgZone) {

    this.zone.runOutsideAngular(() => {

      socket.canbusData.subscribe((data) => {

        this.zone.runOutsideAngular(() => {
          //this.numberOfFramesPerSecond++;
          this.frames[data.id] = this.frameFromData(data);
        });
      });

      //setInterval(() => {
        //console.log('Number of frames to proces in one second:', this.numberOfFramesPerSecond);
        //this.numberOfFramesPerSecond = 0;

        //this.framesToDisplay = this.frames;
      //}, 1000);

      // FAKE DATA
      //this.Render();

    });

  } 

  // Render = () => {
  //   for(var i = 0; i < 25; i++) {

  //     this.zone.runOutsideAngular(() => {

  //       this.numberOfFramesPerSecond++;
  //       let frame = this.frameFromData(this.generateFakeData());
  //       this.frames[frame.id.value] = frame;

  //     });

  //   }
  //   requestAnimationFrame(this.Render);
    
  // }

  frameFromData(data) : Frame {

    let frame = new Frame();
    frame.id = new Byte(data.id);
    frame.a = new Byte(data.a);
    frame.b = new Byte(data.b);
    frame.c = new Byte(data.c);
    frame.d = new Byte(data.d);
    frame.e = new Byte(data.e);
    frame.f = new Byte(data.f);
    frame.g = new Byte(data.g);
    frame.h = new Byte(data.h);
    return frame;
  }

  // generateFakeData() {
  //   // var fakeFrameIDs = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000];
  //   var fakeFrameIDs = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 425, 450, 475, 500];
  //   let data = {};
  //   data['id'] = fakeFrameIDs[Math.floor(Math.random() * fakeFrameIDs.length)];
  //   data['a'] = Math.floor(Math.random() * 255) + 1;
  //   data['b'] = Math.floor(Math.random() * 255) + 1;
  //   data['c'] = Math.floor(Math.random() * 255) + 1;
  //   data['d'] = Math.floor(Math.random() * 255) + 1;
  //   data['e'] = Math.floor(Math.random() * 255) + 1;
  //   data['f'] = Math.floor(Math.random() * 255) + 1;
  //   data['g'] = Math.floor(Math.random() * 255) + 1;
  //   data['h'] = Math.floor(Math.random() * 255) + 1;
  //   return data;
  // }

  // generateFakeFrame() {
  //   var fakeFrameIDs = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000];
  //   let newFrame = new Frame();
  //   newFrame.id = new Byte(fakeFrameIDs[Math.floor(Math.random() * fakeFrameIDs.length)]);
  //   newFrame.a = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.b = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.c = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.d = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.e = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.f = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.g = new Byte(Math.floor(Math.random() * 255) + 1);
  //   newFrame.h = new Byte(Math.floor(Math.random() * 255) + 1);

  //   let oldFrame : Frame = this.frames[newFrame.id.hex as string];

  //   if(oldFrame != null) {
  //     if(oldFrame.a.value != newFrame.a.value) { newFrame.a.changed = true; }
  //     if(oldFrame.b.value != newFrame.b.value) { newFrame.b.changed = true; }
  //     if(oldFrame.c.value != newFrame.c.value) { newFrame.c.changed = true; }
  //     if(oldFrame.d.value != newFrame.d.value) { newFrame.d.changed = true; }
  //     if(oldFrame.e.value != newFrame.e.value) { newFrame.e.changed = true; }
  //     if(oldFrame.f.value != newFrame.f.value) { newFrame.f.changed = true; }
  //     if(oldFrame.g.value != newFrame.g.value) { newFrame.g.changed = true; }
  //     if(oldFrame.h.value != newFrame.h.value) { newFrame.h.changed = true; }
  //   }

  //   this.frames[newFrame.id.hex as string] = newFrame;

  //   this.events.publish('canbus:frame', newFrame);
  // }
}
