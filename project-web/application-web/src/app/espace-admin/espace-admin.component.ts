import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ReclamationRecuComponent } from '../reclamation-recu/reclamation-recu.component';
import { TacheComponent } from '../tache/tache.component';
import { ConsulterTachesComponent } from '../consulter-taches/consulter-taches.component';
import { ReclamationRefuseComponent } from '../reclamation-refuse/reclamation-refuse.component';
import { AffecterTachesComponent } from '../affecter-taches/affecter-taches.component';
import { AuthService } from '../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss']
})


export class EspaceAdminComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public authStatus: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = true;
  cinadmin: string;
  KEY = 'session_storage';
  key = 'commune';
  items: any;
  itemss: any;

  constructor(public router: Router, private authService: AuthService, private route:ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService,
    // tslint:disable-next-line:align
    private http: HttpClient, public local: LocalStorageService) {
    console.log(route);
  }

  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadAdmin();
    // tslint:disable-next-line:prefer-const
    let dropdown = document.getElementsByClassName('dropdown-btn');
    let i;
    for (i = 0; i < dropdown.length; i++) {
      // tslint:disable-next-line:space-before-function-paren
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        // tslint:disable-next-line:prefer-const
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  onAffecterTache() {
    this.router.navigate(['affecter-taches']);
  }


  onReclamationRecue() {
    this.router.navigate(['reclamation-recu']);
  }


  onReclamationRefuse() {
    this.router.navigate(['reclamation-refuse']);
  }


  onLogout() {
    this.spinnerService.show();
    this.authService.signIn().then(
      () => {
        console.log('Sign out successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['connection']);
        this.spinnerService.hide();
      }
    );
    console.log(this.authStatus);
  }

  loadAdmin()  {

  // tslint:disable-next-line:prefer-const
  let body = {
    cin: this.cinadmin,
  };
  console.log(body);

  this.http.post('http://localhost/project-web/api/loadadmin.php', JSON.stringify(body)).subscribe(res => {
this.items = res;
this.local.set(this.key,this.items);
    // tslint:disable-next-line:align
console.log(this.items);
});
}


}
