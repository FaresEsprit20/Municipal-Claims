import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulter-taches',
  templateUrl: './consulter-taches.component.html',
  styleUrls: ['./consulter-taches.component.scss']
})

export class ConsulterTachesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
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
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadTaches();
  }

  loadTaches() {

    let body = {

      cin: this.cinadmin,

    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/loadtaches.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      console.log(this.items);
      this.length = this.items.length;
      console.log(this.length);
    })

  }


  showjustificationTache(id) {
    this.local.set(this.key, id);
    this.id = this.local.get(this.key);
    console.log('tache_id' + id);
    this.router.navigate(['justification-admin']);
  }

  showjustification(id) {
    this.local.set(this.key, id);
    console.log('reclamation_id' + id);
    this.router.navigate(['jtc']);
  }

}
