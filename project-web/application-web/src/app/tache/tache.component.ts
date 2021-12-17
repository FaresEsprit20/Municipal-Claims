import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})

export class TacheComponent implements OnInit {

  server: string;
  public items: any;
  KEY = 'session_storage';
  key = 'justification_storage';
  id: string;

  constructor(private serverService: ServerService, private http: HttpClient, public local: LocalStorageService) {
    this.server = this.serverService.server;
    console.log(this.server);
  }

  ngOnInit() {
    this.id = this.local.get(this.key);
    console.log('here is tache');
    console.log(this.id);
    this.load();
  }

  load() {
    let body = {
     id: this.id
    }
    console.log(body);
    this.http.post("http://localhost/project-web/api/getjustiftache.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      // tslint:disable-next-line:align
      console.log('informations taches');
      console.log(this.items);
    })
  }

}
