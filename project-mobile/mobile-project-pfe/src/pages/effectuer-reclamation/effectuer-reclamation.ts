import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ConnecterPage } from '../connecter/connecter';
import { AuthService } from '../services/auth.service';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { ReclamationManuellePage} from '../reclamation-manuelle/reclamation-manuelle';
import { ReclamationAutomatiquePage} from '../reclamation-automatique/reclamation-automatique';
@Component({
  selector: 'page-effectuer-reclamation',
  templateUrl: 'effectuer-reclamation.html',
})
export class EffectuerReclamationPage implements OnInit{
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public authService: AuthService)
  {
    this.loading = this.loadingCtrl.create({
    cssClass: 'my-loading-class',
    spinner: 'bubbles',
    duration: 3000
     });
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad EffectuerReclamationPage');
  }

  ngOnInit()
    {

    }

onGoTorecauto()
{
  this.navCtrl.push(ReclamationAutomatiquePage);
}

onGotorecmanu()
{
  this.navCtrl.push(ReclamationManuellePage);
}


    onLogOut()
    {
    this.loading.present();
    setTimeout(
          () => {
            this.authService.signOut();
            console.log(this.authService.authenticated());
            this.navCtrl.setRoot(ConnecterPage);
                    this.navCtrl.popToRoot();
                      this.loading.dismiss();
          }, 1000
        );
    }

}
