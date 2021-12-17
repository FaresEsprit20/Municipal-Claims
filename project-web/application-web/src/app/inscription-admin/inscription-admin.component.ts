import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotificationService } from '../services/notification.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inscription-admin',
  templateUrl: './inscription-admin.component.html',
  styleUrls: ['./inscription-admin.component.scss']
})


export class InscriptionAdminComponent implements OnInit {

  public authStatus: boolean;
  Form: FormGroup;
  public items: any;

  cin: string;
  fullname: string;
  mailadress: string;
  password: string;
  telephone: string;
  commune: string;


// tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private notifyService: NotificationService,
    // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: align
    private route: ActivatedRoute, private authService: AuthService, private router: Router,
// tslint:disable-next-line: align
    private spinnerService: Ng4LoadingSpinnerService, private http: HttpClient) {



  }


  ngOnInit() {
    this.onInit();
  }

loadCommune()
{
  let body = {

    nomgouv: this.Form.value.gouvernorat,
    nomcom: this.Form.value.commune,

  }
  console.log(body);
  this.http.post("http://localhost/project-web/api/getcommunes.php", JSON.stringify(body)).subscribe(res => {
   this.items = res;
    // tslint:disable-next-line:align
    console.log(this.items);
  })
}

  onInit() {

    this.Form = this.formBuilder.group({
      cin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])],
      fullname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z _]+[a-zA-Z _]'), Validators.minLength(7), Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email])],
      tel: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])],
      gouvernorat: ['', Validators.compose([Validators.required])],
      commune: ['', Validators.compose([Validators.required])],
       password: ['', Validators.compose([Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(15)])]

    });
  }


  onSubmit(form: NgForm)
  {
    this.spinnerService.show();
    let body = {
      cinadmin: this.Form.value.cin,
      fullname: this.Form.value.fullname,
      password: this.Form.value.password,
      mail: this.Form.value.email,
      nomgouv: this.Form.value.gouvernorat,
      nomcom: this.Form.value.commune,
      tel: this.Form.value.tel
    };
    console.log(body);
    this.http.post('http://localhost/project-web/api/inscription.php', JSON.stringify(body)).subscribe(res => {
      if (res === true) {
        this.notifyService.showSuccess(' Vous etes inscrit en tant que Administrateur! ', 'Félicitations!');
        console.log('successssssssssss');
        this.authService.signIn().then(
          () => {
            this.authStatus = this.authService.isAuth;
            this.router.navigate(['/connection']);
            const formValue = this.Form.value;
            console.log(this.authStatus);
            this.spinnerService.hide();
            // tslint:disable-next-line: quotemark
            this.Form.reset();
          }
        );

      } else if (res === false) {
        console.log('faiiiiiiiiiiiiiiiiiiiiiiilure');
        this.notifyService.showFailure(' Erreur ! ', 'Echec!');
        this.spinnerService.hide();
        this.Form.reset();
      }
    })


  }


}
