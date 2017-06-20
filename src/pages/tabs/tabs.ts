import { Component } from '@angular/core';

import { MusicPage } from '../music/music';
import { HomePage } from '../home/home';
import { CarPage } from '../car/car';
import { CanbusPage } from '../canbus/canbus';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CanbusPage;
  tab2Root = HomePage;
  tab3Root = MusicPage;
  tab4Root = CarPage;
  
  constructor() {

  }
}
