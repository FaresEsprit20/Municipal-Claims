import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { EspaceAgentPage } from '../espace-agent/espace-agent';


@Component({
  selector: 'page-tache',
  templateUrl: 'tache.html',
})
export class TachePage {

  public items: any;
  public dt: any;

  cin: string = "";
  tache_id: string = "";
  server: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postPvdr: PostProvider, public http: Http) {
    this.server = this.postPvdr.server;
    this.items = this.navParams.get("item");
    this.cin = this.items.cin_agent;
    console.log(this.cin);
    this.tache_id = this.items.tache_id;
    console.log(this.tache_id);
    console.log(this.items);

  }



}
