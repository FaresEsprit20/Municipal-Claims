import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { ReclamationPage } from '../reclamation/reclamation';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-single-reclamation',
  templateUrl: 'single-reclamation.html',
})

export class SingleReclamationPage {

  public items: any;
  public itemss: any;
  public dt: any;

  cin: string = "";
  rec_id: string = "";
  server: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postPvdr: PostProvider, public http: Http) {
    this.server = this.postPvdr.server;
    this.items = this.navParams.get("item");
    this.cin=this.items.cin_cit;
    console.log(this.cin);
    this.rec_id = this.items.rec_id;
    console.log(this.rec_id);
    console.log(this.items);  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleReclamationPage');
    this.loadtache(this.items.rec_id);
  }

  onGo() {
    this.navCtrl.push(ReclamationPage, { item: this.rec_id } );
  }

  loadtache(id: string) {
    let body = {
      id: id,
      aksi: 'load_tc'
    }
    console.log(body);

    this.postPvdr.postData(body).subscribe(data => {
      this.itemss = data.items;
      console.log(this.itemss);
    });
  }

  

}
