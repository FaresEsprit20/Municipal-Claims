import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SuivreReclamationPage } from '../suivre-reclamation/suivre-reclamation';
import { EffectuerReclamationPage } from '../effectuer-reclamation/effectuer-reclamation';
import { SettingsPage } from '../settings/settings';
import { ConnecterPage } from '../connecter/connecter';
import { AuthService } from '../services/auth.service';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-espace-citoyen',
  templateUrl: 'espace-citoyen.html',
})


export class EspaceCitoyenPage {
  nb :string;
  loading: any;
  public dt: any;
  items: any;

  cin: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public authService: AuthService, private postPvdr: PostProvider, public http: Http, public storage: Storage) {

      this.loading = this.loadingCtrl.create({
        cssClass: 'my-loading-class',
        spinner: 'bubbles',
        duration: 3000
      });
    }


    ionViewDidLoad()
    {
      console.log('ionViewDidLoad EspaceCitoyenPage');
      this.storage.get('session_storage').then((result) => {
        this.dt = result;
        this.cin = this.dt[0].cin;
        console.log(this.cin + 'here');
        this.loadNotif(this.cin);
      }); 
    }


   loadNotif(cin:string)
   {
     let body = {
       cin: cin,
       aksi: 'suivre_notif'
     }
     console.log(body);

     this.postPvdr.postData(body).subscribe((data) => {
       this.nb = data;
       console.log(data);
     });
   }


    onDeconnect()
    {
      let body = {
        aksi: 'add_Connection'
      }

      let type = "application/json; charset= UTF-8";
      let headers = new Headers ({ 'Content-Type': type });
      let options = new RequestOptions ({ headers : headers });

      this.postPvdr.postData(body) .subscribe((data) => {
        console.log('connexion fermée');
      });
    }


    onGoToSuivre()
    {
      this.navCtrl.push(SuivreReclamationPage);
    }


    onGoToEffectuer()
    {
      this.navCtrl.push(EffectuerReclamationPage);
    }


    onParametres()
    {
      this.navCtrl.push(SettingsPage);
    }


    onLogOut()
    {
      this.loading.present();
      setTimeout(
        () => {
          this.onDeconnect();
          this.authService.signOut();
          console.log(this.authService.authenticated());
          this.navCtrl.setRoot(ConnecterPage);
          this.navCtrl.popToRoot();
          this.loading.dismiss();
        }, 1000
      );
    
      console.log('storage nettoyé');
    }

  
  }
