import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ConsulterTachesPage} from '../consulter-taches/consulter-taches';
import { SettingsPage } from '../settings/settings';
import { ConnecterPage } from '../connecter/connecter';
import { PostProvider } from '../../providers/post-provider';
import { AuthService } from '../services/auth.service';
import { ValiderPage} from '..//valider/valider';


@Component({
  selector: 'page-espace-agent',
  templateUrl: 'espace-agent.html',
})

export class EspaceAgentPage {

  loading: any;
  nb: string;
  public dt: any;
  items: any;

  cin: string = "";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
   public authService: AuthService, private postPvdr: PostProvider,  public storage: Storage) {

    this.loading = this.loadingCtrl.create({
      cssClass: 'my-loading-class',
      spinner: 'bubbles',
      duration: 3000
    });

  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad EspaceAgentPage');
    this.storage.get('session_storage').then((result) => {
      this.dt = result;
      this.cin = this.dt[0].cin;
      console.log(this.cin + 'here');
      this.loadNotif(this.cin);
    }); 
  }

  loadNotif(cin: string) {
    let body = {
      cin: cin ,
      aksi: 'tache_notif'
    }
    console.log(body);

    this.postPvdr.postData(body).subscribe((data) => {
      this.nb = data;
      console.log(data);
      console.log(this.nb);
    });
  }
  
  onGoToConsulter()
  {
    this.navCtrl.push(ConsulterTachesPage);
  }

  onGoToValider()
  {
      this.navCtrl.push(ValiderPage);
  }

  onParametres()
  {
    this.navCtrl.push(SettingsPage);
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


  onLogOut()
  {
    console.log(this.authService.authenticated());
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
