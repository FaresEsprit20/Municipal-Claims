import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormsModule, NgForm, FormGroup, Validators, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServerService } from '../services/server.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-justification',
  templateUrl: './justification.component.html',
  styleUrls: ['./justification.component.scss']
})
export class JustificationComponent implements OnInit {


public items: any;
KEY = 'session_storage';
key = 'justification_storage';
id: string;

  server: string;

  constructor(private serverService: ServerService, public local: LocalStorageService, private http: HttpClient) {
    console.log(this.server);
    this.server = this.serverService.server;
  }

  ngOnInit() {
    this.id = this.local.get(this.key);
    console.log('here is reclamation');
    console.log(this.id);
    this.load();
}


load() {
  let body = {
    id: this.id
  }
  console.log(body);
  this.http.post("http://localhost/project-web/api/getrecj.php", JSON.stringify(body)).subscribe(res => {
    this.items = res;
    // tslint:disable-next-line:align
    console.log('informations taches');
    console.log(this.items);
  })
}

}
