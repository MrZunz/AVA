import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Hotspot } from '@ionic-native/hotspot';

import { MusicPage } from '../pages/music/music';
import { HomePage } from '../pages/home/home';
import { CarPage } from '../pages/car/car';
import { CanbusPage } from '../pages/canbus/canbus';
import { TabsPage } from '../pages/tabs/tabs';

import { TitlebarComponent } from '../components/titlebar/titlebar';

import { HotspotProvider } from '../providers/hotspot/hotspot';
import { ConfigProvider } from '../providers/config/config';
import { SocketProvider } from '../providers/socket/socket';
import { CanbusProvider } from '../providers/canbus/canbus';
import { MFSWHandler } from '../providers/canbus/handlers/mfsw';
import { LightsHandler } from '../providers/canbus/handlers/lights';
import { KeysPipe } from '../pipes/keys/keys';

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    HomePage,
    CarPage,
    CanbusPage,
    TabsPage,
    TitlebarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    HomePage,
    CarPage,
    CanbusPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HotspotProvider,
    Hotspot,
    ConfigProvider,
    SocketProvider,
    CanbusProvider,
    MFSWHandler,
    LightsHandler
  ]
})
export class AppModule {}
