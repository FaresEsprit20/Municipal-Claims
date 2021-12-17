import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, Validators, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { EspaceAdminComponent } from '../espace-admin/espace-admin.component';
import { NgModule } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})


export class ConnectionComponent implements OnInit {

  authStatus: boolean;
  Form: FormGroup;
  cin: any;
  cinadmin: any = null;
  password: any;
  KEY = 'session_storage';


  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private notifyService: NotificationService, private router: Router,
    private http: HttpClient, private route: ActivatedRoute, private authService: AuthService,
    public local: LocalStorageService, public session: SessionStorageService,
     private spinnerService: Ng4LoadingSpinnerService) {

  }


  ngOnInit() {
    this.onInit();
  }


  onInit() {
    this.Form = this.formBuilder.group({
      cin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])]
    });
  }


  adminLogin(form: NgForm) {
    this.spinnerService.show();
    let body = {
      cin: this.Form.value.cin,
      pass: this.Form.value.password
    }

    console.log(body);

    this.http.post('http://localhost/project-web/api/login.php', JSON.stringify(body)).subscribe(res => {
      if (res === true) {

        this.local.set(this.KEY, this.Form.value.cin);
        this.cinadmin = this.local.get(this.KEY);
        // tslint:disable-next-line:whitespace
        console.log('hhhhhhhhhhh'+this.cinadmin);

        this.authService.signIn().then(
          () => {
            console.log('Sign in successful!');
            this.authStatus = this.authService.isAuth;
            this.router.navigate(['espace-admin']);
            const formValue = this.Form.value;
            console.log(form.value);
            console.log(this.authStatus);
            this.spinnerService.hide();
          }
        );
      } else {
        this.spinnerService.hide();
        this.notifyService.showFailure(' Erreur de saisie ou Utilisateur non inscrit! ', 'Echec!');
        this.Form.reset();
      }
    });
  }


}
