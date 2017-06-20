import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hotspot, HotspotNetwork, HotspotDevice } from '@ionic-native/hotspot';
import { ConfigProvider } from '../config/config';
import { Platform, Events } from 'ionic-angular';
import { SocketProvider } from '../socket/socket';

@Injectable()
export class HotspotProvider {

  active: Boolean = false;
  connected: Boolean = false;
  connectedDevice: HotspotDevice;
  connectedDeviceChecker: any;

  constructor(private platform: Platform, private hotspot: Hotspot, private config: ConfigProvider, public events: Events, public socket: SocketProvider) {

    platform.ready().then(() => {
      hotspot.isAvailable().then(available => {
        console.log('Hotspot available:', available);

        if(available) {
          // this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
          //   console.log(networks);
          // });

          this.hotspot.createHotspot(config.hotspot.name, "WPA_PSK", config.hotspot.password).then(() => {
            console.log('Hotspot \'' + config.hotspot.name + '\' created');
            this.active = true;
            events.publish('hotspot:active', this.active);
          }).catch(() => {
            this.active = false;
          });
        }
      }).catch(() => {
        console.log('Hotspot plugin not available');
      });
    });

    if(config.environment != 'development') {

      this.connectedDeviceChecker = setInterval(() => {
        hotspot.getAllHotspotDevices().then((devices) => {
          if(devices.length > 0) {
            this.connected = true;
            this.connectedDevice = devices[0];
            console.log('Device connected to hotspot:', devices[0]);
            events.publish('hotspot:connected', devices[0]);
            clearInterval(this.connectedDeviceChecker);
          }
          else {
            this.connected = false;
          }
        })
      }, 5000);

    }
    else {
      // app is in development mode
      this.socket.connect(config.socket.host);
    }

  }
}
