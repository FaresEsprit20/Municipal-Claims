import { Component, NgModule, OnInit} from '@angular/core';
import {  NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { EspaceAdminComponent } from '../espace-admin/espace-admin.component';
import { AuthService } from '../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from '../services/notification.service';
import { LocalStorageService } from 'angular-web-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-agent',
  templateUrl: './ajouter-agent.component.html',
  styleUrls: ['./ajouter-agent.component.scss']
})

export class AjouterAgentComponent implements OnInit {

  public authStatus: boolean;
  Form: FormGroup;
  public items: any;
  public itemss: any;
  cinadmin: string;
  KEY = 'session_storage';
  key = 'commune';
  commune: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private http: HttpClient,
    // tslint:disable-next-line:align
  private spinnerService: Ng4LoadingSpinnerService, private notifyService: NotificationService, public local: LocalStorageService) {

    this.Form = this.formBuilder.group({
// tslint:disable-next-line: max-line-length
        cin: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8) ])],
// tslint:disable-next-line: max-line-length
        fullname: ['', Validators.compose([ Validators.required, Validators.pattern('[a-zA-Z _]+[a-zA-Z _]'), Validators.minLength(8), Validators.maxLength(35) ])],
// tslint:disable-next-line: max-line-length
        email: ['', Validators.compose([ Validators.required,  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email ])],
// tslint:disable-next-line: max-line-length
        tel: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8) ])],
// tslint:disable-next-line: max-line-length
        password: ['', Validators.compose([ Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(15) ])]
      });

  }


  ngOnInit() {
    this.itemss= [];
    this.cinadmin = this.local.get(this.KEY);
    console.log(this.cinadmin);
    this.loadnomcommune();

  }

loadnomcommune() {
  let body = {
cin: this.cinadmin,
  }
  console.log(body);
  this.http.post("http://localhost/project-web/api/getnomcommunes.php", JSON.stringify(body)).subscribe(res => {
    this.itemss = res;
    this.commune = this.itemss[0].nom_com;
    // tslint:disable-next-line:align
    console.log(this.commune);
  })
}


  onSubmit(form: NgForm) {
    this.spinnerService.show();
    // tslint:disable-next-line:prefer-const
    let body = {
      cin: this.cinadmin,
      cinagent: this.Form.value.cin,
      fullname: this.Form.value.fullname,
      mail: this.Form.value.email,
      tel: this.Form.value.tel,
      password: this.Form.value.password,
      commune: this.commune,
    }
    console.log(body);
    this.http.post("http://localhost/project-web/api/inscriptionagent.php", JSON.stringify(body)).subscribe( res => {
      if (res === true) {
        this.notifyService.showSuccess(' Votre Agent a été inscrit avec succés ! ', 'Félicitations!');
        console.log('successssssssssss');
        this.authService.signIn().then(
          () => {
            console.log(' Ajout agent successful!');
            this.authStatus = this.authService.isAuth;
            this.router.navigate(['espace-admin']);
            const formValue = this.Form.value;
            // tslint:disable-next-line:align
            console.log(form.value);
            // tslint:disable-next-line:align
            console.log(this.authStatus);
            this.Form.reset();
          }
        );

      } else if (res === false) {
        console.log('faiiiiiiiiiiiiiiiiiiiiiiilure');
        this.notifyService.showFailure(' Erreur ! Le CIN inséré est déja utilisé ', 'Echec!');
        this.spinnerService.hide();
        this.Form.reset();
      }
    });


  }


}
