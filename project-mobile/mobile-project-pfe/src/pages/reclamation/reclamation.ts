import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-reclamation',
  templateUrl: 'reclamation.html',
})
export class ReclamationPage {

  public items: any;
  i: any;
  public dt: any;
  public itemss: any;
  cin: string="";
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
  tache_id: string;
  server: string;


  constructor(public navCtrl: NavController, private postPvdr: PostProvider, public navParams: NavParams,
public http: Http, public storage: Storage) {
   
this.server = this.postPvdr.server;
this.itemss = this.navParams.get("item");

this.tache_id = this.itemss;
console.log(this.tache_id);
console.log(this.itemss);  
  
  }


  //evenement d'entrée
  ionViewWillEnter()
  {
      console.log('ionViewWillEnter ReclamationPage');
      this.loadtache();
  }

  loadtache() {
    let body = {
      id: this.tache_id,
      aksi: 'load_tx'
    }
    console.log(body);

    this.postPvdr.postData(body).subscribe(data => {
      this.items = data.items;
      console.log(this.items);
    });
  }

}
