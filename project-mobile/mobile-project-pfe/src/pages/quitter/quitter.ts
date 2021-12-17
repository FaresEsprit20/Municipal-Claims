import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform} from 'ionic-angular';


@Component({
  selector: 'page-quitter',
  templateUrl: 'quitter.html',
})
export class QuitterPage {
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public platform: Platform)
  {
    this.loading = this.loadingCtrl.create({
    cssClass: 'my-loading-class',
    spinner: 'bubbles',
    duration: 3000
     });
     this.loading.present();
     setTimeout(
       () => {
        this.exitApp();
        this.loading.dismiss();
       }, 2000
     );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuitterPage');
  }

  exitApp(){
       this.platform.exitApp();
    }
}
