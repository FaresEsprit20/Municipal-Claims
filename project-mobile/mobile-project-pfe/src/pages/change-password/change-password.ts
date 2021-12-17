import { Component, OnInit  } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import { SettingsPage } from '../settings/settings';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})

export class ChangePasswordPage {
  private Form : FormGroup;
  public password: any;
  public dt: any;
  cin :string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    private formBuilder: FormBuilder, private postPvdr: PostProvider, public storage: Storage){

      console.log("Hello UserPreferencesProvider Provider");
      this.Form = formBuilder.group({
        password: ['', Validators.compose([Validators.required, Validators.minLength(6),  Validators.maxLength(15) ])],
        password_repeat: ['', Validators.compose([Validators.required, Validators.minLength(6),  Validators.maxLength(15), Validators.required,this.equalto('password')])]
      });
    }


    ionViewWillEnter()
    {
      console.log('ionViewWillEnter ChangePasswordPage');
      this.storage.get('session_storage').then((result) => {
        this.dt= result;
        this.cin = this.dt[0].cin;
        console.log(this.cin);
        console.log(result);
      });
    }

    changePassword()
    {
      let body =
      {
        password:  this.password,
        cin:         this.cin,
        aksi: 'password'
      }

      let type = "application/json; charset= UTF-8";
      let headers = new Headers ({ 'Content-Type': type });
      let options = new RequestOptions ({ headers : headers });
      this.postPvdr.postData(body).subscribe((data)=> {

        if (data.success){
          console.log('mot de passse enregistré !');
          this.navCtrl.push(SettingsPage);
        }

      });
    }

    onSubmit(form: NgForm) {

      this.password=this.Form.get('password').value;
      console.log(form.value);
      this.changePassword();
      const toast = this.toastCtrl.create({
        message: 'Mot de Passe changé !',
        duration: 4000
      });
      toast.present();
    }



    equalto(field_name): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
        let input = control.value;
        let isValid=control.root.value[field_name]==input
        if(!isValid)
        return { 'equalTo': {isValid} }
        else
        return null;
      };
    }

  }
