import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, Validators, AbstractControl, FormBuilder, FormControl } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { EspaceAdminComponent } from '../espace-admin/espace-admin.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-parametres-admin',
  templateUrl: './parametres-admin.component.html',
  styleUrls: ['./parametres-admin.component.scss']
})


export class ParametresAdminComponent implements OnInit {

  Form: FormGroup;
  cinadmin: string;
  KEY = 'session_storage';
  items: any;


  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private notifyService: NotificationService,
    // tslint:disable-next-line:align
    public local: LocalStorageService,
// tslint:disable-next-line: align
    private spinnerService: Ng4LoadingSpinnerService, private authService: AuthService) {

    this.Form = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email])],
      // tslint:disable-next-line:max-line-length
      tel: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])],
      // tslint:disable-next-line:max-line-length
      password: ['', Validators.compose([Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(15)])],
    });

  }


  ngOnInit() {
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
  }


  onSubmit(form: NgForm) {

    this.spinnerService.show();
    // tslint:disable-next-line:prefer-const
    let body = {
      cin: this.cinadmin,
      mail: this.Form.value.email,
      telephone: this.Form.value.tel,
      password: this.Form.value.password
    }

    console.log(body);
    this.http.post("http://localhost/project-web/api/settings.php", JSON.stringify(body)).subscribe(res => {
      console.log(res);
    })

    this.authService.signIn().then(
      () => {
        this.notifyService.showSuccess(' Votre profil est mis a jour! ', 'Félicitations!');
        console.log(' update successful!');
        this.router.navigate(['espace-admin']);
        this.spinnerService.hide();
        const formValue = this.Form.value;
        console.log(form.value);
        this.Form.reset();
      }
    );

  }

}
