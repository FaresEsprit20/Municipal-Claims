import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TachePage } from '../tache/tache';
import { PostProvider } from '../../providers/post-provider';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-consulter-taches',
  templateUrl: 'consulter-taches.html',
})


export class ConsulterTachesPage {

  items: any;
  public dt: any;
  cin: string = "";
  server: string;

  constructor(public navCtrl: NavController, private postPvdr: PostProvider, public http: Http, public storage: Storage)
  {
    this.server = this.postPvdr.server;
  }

  ionViewWillEnter() 
  {
    console.log('ionViewWillEnter ConsulterTachesPage');
    this.storage.get('session_storage').then((result) => {
      this.dt = result;
      this.cin = this.dt[0].cin;
      console.log(this.cin + 'here');
      this.loadTache(this.cin);
    });
  }


  onLoadTache(item) 
{
    this.navCtrl.push(TachePage, { item: item });
}


  loadTache(cin: string) {
    let body = {
      cin: cin,
      aksi: 'suivre_tache'
    }
    console.log(body);
    this.postPvdr.postData(body).subscribe(data => {
      this.items = data.items;
      console.log(data.items);
    });
  }


}
