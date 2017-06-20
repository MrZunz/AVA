import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {

  environment: String = 'development';
  hotspot : HotspotConfig;
  socket: SocketConfig;

  constructor() {
    this.hotspot = new HotspotConfig();
    this.socket = new SocketConfig();
  }

}

class HotspotConfig {
  name: string = "Default Hotspot Name";
  password: string = "SomethingVerySecret";
}

class SocketConfig {
  host: string = "http://192.168.192.50:3000/";
}
