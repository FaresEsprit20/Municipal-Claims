import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder, FormControl, AbstractControl, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-affecter-taches',
  templateUrl: './affecter-taches.component.html',
  styleUrls: ['./affecter-taches.component.scss']
})

export class AffecterTachesComponent implements OnInit {

  authStatus: boolean;
  Form: FormGroup;
  cinadmin: string;
  KEY = 'session_storage';
  items: any;
  itemss: any;


  // tslint:disable-next-line:no-inferrable-types
 

  constructor(private formBuilder: FormBuilder, private notifyService: NotificationService, public local: LocalStorageService,
  // tslint:disable-next-line:align
  private authService: AuthService, private router: Router,
    // tslint:disable-next-line: align
    private spinnerService: Ng4LoadingSpinnerService, private http: HttpClient) {

    }


  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadAgents();
    this.loadReclamations();
    this.onInit();
  }


  onInit() {
    this.Form = this.formBuilder.group({
      cinagent: ['', Validators.compose([Validators.required ])],
      rec: ['', Validators.compose([Validators.required ])],
      sujet: ['', Validators.compose([Validators.required ])],
      adresse: ['', Validators.compose([Validators.required ])]
    });
  }


  loadAgents() {
    // tslint:disable-next-line:prefer-const
    let body = {

      cin: this.cinadmin,

    }
    console.log(body);
    this.http.post("http://localhost/project-web/api/agtget.php", JSON.stringify(body)).subscribe(res => {
      this.items = res;
      // tslint:disable-next-line:align
      console.log(this.items);
    });
  }


  loadReclamations() {
    // tslint:disable-next-line:prefer-const
    let body = {

      cin: this.cinadmin,

    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/getReclamations.php", JSON.stringify(body)).subscribe(res => {
      this.itemss = res;
      // tslint:disable-next-line:align
      console.log(this.itemss);
    });
  }

  onSubmit(form: NgForm) {
    this.spinnerService.show();
    let body = {
      cin: this.cinadmin,
      cinagent: this.Form.value.cinagent,
      id: this.Form.value.rec,
      sujet: this.Form.value.sujet,
      adresse: this.Form.value.adresse
    };
    console.log(body);
    this.http.post("http://localhost/project-web/api/writetache.php", JSON.stringify(body)).subscribe(res => {
      if (res === true) {
        this.notifyService.showSuccess(' La Tache a été effectuée ! ', 'Félicitations!');
        console.log('successssssssssss');
        this.authService.signIn().then(
          () => {
            this.authStatus = this.authService.isAuth;
            this.router.navigate(['/espace-admin']);
            const formValue = this.Form.value;
            console.log(this.authStatus);
            this.spinnerService.hide();
          }
        );
        }
    })
  }


}
