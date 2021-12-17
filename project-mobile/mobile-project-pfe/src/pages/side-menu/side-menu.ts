import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ConnecterPage } from '../connecter/connecter';
import { InscriptionPage } from '../inscription/inscription';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { SettingsPage } from '../settings/settings';



@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  MENU = {
    DARK: 'menu-dark',
  };

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private alertCtrl: AlertController  ) {

  }

  onGoToConnecter() {
   this.navCtrl.push(ConnecterPage);
  }

  onGoToInscrire() {
   this.navCtrl.push(InscriptionPage);
  }




}
