import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { ConnecterPage } from '../pages/connecter/connecter';
import { InscriptionPage } from '../pages/inscription/inscription';
import { SettingsPage } from '../pages/settings/settings';
import { QuitterPage } from '../pages/quitter/quitter';
import { ChangePasswordPage } from '../pages/change-password/change-password';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ConnecterPage;
  activePage = new Subject();


  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'contact', active: false },
      { icon: 'settings', active: false }

    ];

    this.pages = [

      { title: 'Accueil', component: 'SideMenuPage', active: true, icon: 'home' },
      { title: 'Se Connecter', component: ConnecterPage, active: false, icon: 'contact' },
      { title: 'Inscrivez-vous', component: InscriptionPage, active: false, icon: 'contact' },
      { title: 'Fermer', component: QuitterPage, active: false, icon: 'power' },
      ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map (page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
