import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-justification-admin',
  templateUrl: './justification-admin.component.html',
  styleUrls: ['./justification-admin.component.scss']
})

export class JustificationAdminComponent implements OnInit {

  public items: any;
  public itemss: any;
  server: string;
  KEY = 'session_storage';
  key = 'justification_storage';
  id: string;
  ids: string;
  cin:string;

  constructor(private serverService: ServerService, private http: HttpClient, public local: LocalStorageService) { 
    this.server = this.serverService.server;
    console.log(this.server);
  }




ngOnInit() {
  this.id = this.local.get(this.key);
  console.log('here is tache');
  console.log(this.id);
  this.cin = this.local.get(this.KEY);
  console.log('here is admin');
  console.log(this.cin);
  this.load();
}


  load() {
    let body = {
      id: this.id
    }
    console.log(body);
    this.http.post("http://localhost/project-web/api/getjustiftachereclamation.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      // tslint:disable-next-line:align
      console.log('informations taches');
      console.log(this.items);
    })
  }


}
