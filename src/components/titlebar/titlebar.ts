import { Component, Input } from '@angular/core';
import { HotspotProvider } from '../../providers/hotspot/hotspot';
import { Events } from 'ionic-angular';

@Component({
  selector: 'titlebar',
  templateUrl: 'titlebar.html'
})
export class TitlebarComponent {

  @Input() title: String;
  hotspotActive: Boolean = false;
  hotspotConnected: Boolean = false;

  constructor(hotspot: HotspotProvider, public events: Events) { 

    // hotspot.active.subscribe(active => {
    //   this.hotspotActive = active;
    // });

    // hotspot.connected.subscribe(connected => {
    //   this.hotspotConnected = connected;
    // });

    events.subscribe('hotspot:active', (active) => {
      this.hotspotActive = active;
    });

    events.subscribe('hotspot:connected', (connected) => {
      this.hotspotConnected = connected;
    });
  }
}
