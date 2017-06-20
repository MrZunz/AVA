import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from "socket.io-client";
import { ConfigProvider } from '../config/config';
import { Events } from 'ionic-angular';

@Injectable()
export class SocketProvider {

  socket: any;

  constructor(private config: ConfigProvider, public events: Events) {
    console.log('Hello SocketProvider Provider');
  }

  connect(ip) {
    this.socket = io(this.config.socket.host);

    this.socket.on('connect', () => {
      console.log('socket connected to', this.config.socket.host);
      this.events.publish('socket:connected');
    });

    this.socket.on('disconnect', () => {
      this.events.publish('socket:disconnected');
    });

    this.socket.on('canbus', (data) => {
      this.events.publish('canbus:data', data);
      //console.log('canbus data:', data);
    })
  }
}
