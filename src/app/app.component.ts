import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrendsPage } from '../pages/trends/trends';
import { SettingsPage } from '../pages/settings/settings';


import { ProgressPage } from '../pages/progress/progress';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ProgressPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToProgress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProgressPage);
  }goToTrends(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TrendsPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }
}
