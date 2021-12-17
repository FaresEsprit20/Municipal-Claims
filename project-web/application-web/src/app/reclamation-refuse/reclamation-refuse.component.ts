import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-reclamation-refuse',
  templateUrl: './reclamation-refuse.component.html',
  styleUrls: ['./reclamation-refuse.component.scss']
})


export class ReclamationRefuseComponent implements OnInit {

  cinadmin: string;
  KEY = 'session_storage';
  items: any;
  // tslint:disable-next-line:no-inferrable-types
  length: number = 0;
  id: string;
  key = 'reclamation_storage';

  constructor(private http: HttpClient, public local: LocalStorageService, private router: Router) {

  }

  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.deletedReclamation();
  }

deletedReclamation() {
    let body = {

      cin: this.cinadmin,

    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/deletedReclamation.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      console.log(this.items);
      this.length = this.items.length;
      console.log(this.length);
    })
  }

  showjustification(id) {

    this.local.set(this.key, id);
    this.id = this.local.get(this.key);
    console.log('reclamation_id' + id);
    this.router.navigate(['justification']);

  }

}
