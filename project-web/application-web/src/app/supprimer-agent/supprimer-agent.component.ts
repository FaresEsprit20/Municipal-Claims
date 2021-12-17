import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-supprimer-agent',
  templateUrl: './supprimer-agent.component.html',
  styleUrls: ['./supprimer-agent.component.scss']
})

export class SupprimerAgentComponent implements OnInit {

  cinadmin: string;
  KEY = 'session_storage';
  items: any;
  length: number=0;

  constructor(public local: LocalStorageService, public session: SessionStorageService, private http: HttpClient) {

  }

  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadAgents();
  }

  loadAgents() {
    let body = {

      cin: this.cinadmin,

    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/getAgents.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      console.log(this.items);
      this.length= this.items.length;
      console.log(this.length);
    })
  }

  delete(cin: any) {
    let body = {

      cin: cin,

    }
    this.http.post("http://localhost/project-web/api/deleteAgents.php", JSON.stringify(body)).subscribe(res => {
      console.log('resultat '+res);
      this.loadAgents();
    })

  }

}
