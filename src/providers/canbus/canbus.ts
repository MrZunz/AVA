import { SocketProvider } from './../socket/socket';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Frame, Byte } from '../../models/canbus';

@Injectable()
export class CanbusProvider {

  frames: Object = {};
  numberOfFramesPerSecond = 0;

  constructor(public events: Events, public socket: SocketProvider) {

    socket.canbusData.subscribe(data => {
      let frame = this.frameFromData(data);
      this.frames[frame.id.hex] = frame;
    });

    setInterval(() => {
      console.log('Number of frames to proces in one second:', this.numberOfFramesPerSecond);
      this.numberOfFramesPerSecond = 0;
    }, 1000);




    // events.subscribe('canbus:data', (data) => {
    //   this.numberOfFramesPerSecond++;

    //   let frame = this.frameFromData(data);
    //   this.frames[frame.id.hex] = frame;
    // });

    // MORE FAKE DATA FFS
    //this.Render();
  }

  frameFromData(data) : Frame {
    let newFrame = new Frame();
    newFrame.id = new Byte(data.id);

    if(data.a !== null) { newFrame.a = new Byte(data.a); }
    if(data.b !== null) { newFrame.b = new Byte(data.b); }
    if(data.c !== null) { newFrame.c = new Byte(data.c); }
    if(data.d !== null) { newFrame.d = new Byte(data.d); }
    if(data.e !== null) { newFrame.e = new Byte(data.e); }
    if(data.f !== null) { newFrame.f = new Byte(data.f); }
    if(data.g !== null) { newFrame.g = new Byte(data.g); }
    if(data.h !== null) { newFrame.h = new Byte(data.h); }

    let oldFrame : Frame = this.frames[newFrame.id.hex as string];

    if(oldFrame != null) {
      if(oldFrame.a.value != newFrame.a.value) { newFrame.a.changed = true; }
      if(oldFrame.b.value != newFrame.b.value) { newFrame.b.changed = true; }
      if(oldFrame.c.value != newFrame.c.value) { newFrame.c.changed = true; }
      if(oldFrame.d.value != newFrame.d.value) { newFrame.d.changed = true; }
      if(oldFrame.e.value != newFrame.e.value) { newFrame.e.changed = true; }
      if(oldFrame.f.value != newFrame.f.value) { newFrame.f.changed = true; }
      if(oldFrame.g.value != newFrame.g.value) { newFrame.g.changed = true; }
      if(oldFrame.h.value != newFrame.h.value) { newFrame.h.changed = true; }
    }

    return newFrame;
  }

  Render = () => {
    for(var i = 0; i < 25; i++) {
      this.numberOfFramesPerSecond++;
      this.events.publish('canbus:data', this.generateFakeData());
    }
    requestAnimationFrame(this.Render);
  }

  generateFakeData() {
    var fakeFrameIDs = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000];
    let data = {};
    data['id'] = fakeFrameIDs[Math.floor(Math.random() * fakeFrameIDs.length)];
    data['a'] = Math.floor(Math.random() * 255) + 1;
    data['b'] = Math.floor(Math.random() * 255) + 1;
    data['c'] = Math.floor(Math.random() * 255) + 1;
    data['d'] = Math.floor(Math.random() * 255) + 1;
    data['e'] = Math.floor(Math.random() * 255) + 1;
    data['f'] = Math.floor(Math.random() * 255) + 1;
    data['g'] = Math.floor(Math.random() * 255) + 1;
    data['h'] = Math.floor(Math.random() * 255) + 1;
    return data;
  }

  generateFakeFrame() {
    var fakeFrameIDs = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950, 975, 1000];
    let newFrame = new Frame();
    newFrame.id = new Byte(fakeFrameIDs[Math.floor(Math.random() * fakeFrameIDs.length)]);
    newFrame.a = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.b = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.c = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.d = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.e = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.f = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.g = new Byte(Math.floor(Math.random() * 255) + 1);
    newFrame.h = new Byte(Math.floor(Math.random() * 255) + 1);

    let oldFrame : Frame = this.frames[newFrame.id.hex as string];

    if(oldFrame != null) {
      if(oldFrame.a.value != newFrame.a.value) { newFrame.a.changed = true; }
      if(oldFrame.b.value != newFrame.b.value) { newFrame.b.changed = true; }
      if(oldFrame.c.value != newFrame.c.value) { newFrame.c.changed = true; }
      if(oldFrame.d.value != newFrame.d.value) { newFrame.d.changed = true; }
      if(oldFrame.e.value != newFrame.e.value) { newFrame.e.changed = true; }
      if(oldFrame.f.value != newFrame.f.value) { newFrame.f.changed = true; }
      if(oldFrame.g.value != newFrame.g.value) { newFrame.g.changed = true; }
      if(oldFrame.h.value != newFrame.h.value) { newFrame.h.changed = true; }
    }

    this.frames[newFrame.id.hex as string] = newFrame;

    this.events.publish('canbus:frame', newFrame);
  }
}
