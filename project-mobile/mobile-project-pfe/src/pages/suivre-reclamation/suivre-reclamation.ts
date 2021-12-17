import { Component } from '@angular/core';
import { NavController , ToastController, App, ActionSheetController} from 'ionic-angular';
import { ReclamationPage} from '../reclamation/reclamation';
import { SingleReclamationPage } from '../single-reclamation/single-reclamation';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-suivre-reclamation',
  templateUrl: 'suivre-reclamation.html',
})


export class SuivreReclamationPage {
 
  items: any;
  public dt: any;

  cin: string ="";
  rec_id: string ="";
  type_rec: string ="";
  description: string ="";
  adresse: string="";
  laptitude: any;
  longitude: any;
  etat_rec: string ="";
  datetime: string=""
  gouvernorat: string ="";
  commune: string="";
  cin_admin: string=""
  postal: string="";
  fichiers: string="";
  myphoto:any;
  server: string;

  constructor(public navCtrl: NavController, private postPvdr: PostProvider, public http: Http,
    public storage: Storage , public toastCtrl: ToastController, appCtrl: App ){

    this.server = this.postPvdr.server;
    }


    //evenement d'entrée
    ionViewWillEnter()
    {
      console.log('ionViewWillEnter SettingsPage');
      this.storage.get('session_storage').then((result) => {
        this.dt = result;
        this.cin = this.dt[0].cin;
        console.log(this.cin + 'here');
        this.load(this.cin);
      });
    }


    load(cin: string)
    {
      let body = {
        cin:  cin ,
        aksi: 'suivre_reclamation'
      }
      console.log(body);

      this.postPvdr.postData(body) .subscribe(data => {
           this.items= data.items;
        console.log(data.items);
      });
    }


  onLoadReclamation(item)
  {
    this.navCtrl.push(SingleReclamationPage, { item: item });
    }

  }
