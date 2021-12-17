import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reclamation-recu',
  templateUrl: './reclamation-recu.component.html',
  styleUrls: ['./reclamation-recu.component.scss']
})


export class ReclamationRecuComponent implements OnInit {

  cinadmin: string;
  KEY = 'session_storage';
  items: any;
  key = 'justification_storage';
  // tslint:disable-next-line:no-inferrable-types
  length: number = 0;
  id: string;

  constructor(private http: HttpClient, public local: LocalStorageService, private router: Router) {

   }

  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadAllReclamation();
  }

  loadAllReclamation()
  {
    let body = {

      cin: this.cinadmin,

    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/AllReclamation.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      console.log(this.items);
      this.length = this.items.length;
      console.log(this.length);
    })
  }

  deleteRec(id) {
    // tslint:disable-next-line:prefer-const
    let body = {
      // tslint:disable-next-line:object-literal-shorthand
      id: id,

    // tslint:disable-next-line:semicolon
    }
    this.http.post("http://localhost/project-web/api/deleteReclamation.php", JSON.stringify(body)).subscribe(res => {
      console.log('resultat ' + res);
      this.loadAllReclamation();
    })

  }

  showjustification(id){

    this.local.set(this.key,id);
    this.id = this.local.get(this.key);
    console.log('reclamation_id'+id);
    this.router.navigate(['justification']);

  }


  acceptRec(id) {
    // tslint:disable-next-line:prefer-const
    let body = {
      // tslint:disable-next-line:object-literal-shorthand
      id: id,

    // tslint:disable-next-line:semicolon
    }
    this.http.post("http://localhost/project-web/api/acceptReclamation.php", JSON.stringify(body)).subscribe(res => {
      console.log('resultat ' + res);
      this.loadAllReclamation();
    // tslint:disable-next-line:semicolon
    })
  }

}
