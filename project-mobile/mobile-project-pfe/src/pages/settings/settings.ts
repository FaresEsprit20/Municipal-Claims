import { Component, ViewChild, NgModule } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { EspaceAgentPage } from '../espace-agent/espace-agent';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { ChangePasswordPage } from '../change-password/change-password';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  cin: string;
  fullname : string;
  occupation: string;
  mailadress: string;
  telephone: string;

  private Form : FormGroup;
  public dt: any;

  constructor(public navCtrl: NavController,   private postPvdr: PostProvider,
    public toastCtrl: ToastController, private formBuilder: FormBuilder, public storage: Storage)
    {
      this.Form = formBuilder.group({
        mailadress: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.email, Validators.required])],
        telephone: ['', Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8), Validators.required ])],
      });
    }


    ionViewWillEnter()
    {
      console.log('ionViewWillEnter SettingsPage');
      this.storage.get('session_storage').then((result) => {
        this.dt= result;
        this.cin = this.dt[0].cin;
        console.log(this.dt[0]);
        console.log(result);
      });
    }


    onChangepassword()
    {
      this.navCtrl.push(ChangePasswordPage);
    }


    onSettings()
    {
      let body =
      {
        mailadress:  this.mailadress,
        telephone:   this.telephone,
        cin:         this.cin,
        aksi: 'settings'
      }

      let type = "application/json; charset= UTF-8";
      let headers = new Headers ({ 'Content-Type': type });
      let options = new RequestOptions ({ headers : headers });
      this.postPvdr.postData(body).subscribe((data)=> {

        if (data.success){
          console.log('modifications enregistrées');
        }

      });
    }


    onSubmit(form: NgForm)
    {
      console.log(form.value);
      this.mailadress= this.Form.controls.mailadress.value;
      this.telephone= this.Form.controls.telephone.value;
      this.onSettings();
      this.navCtrl.pop();
      const toast = this.toastCtrl.create({
        message: 'Modifications Enregistrées !',
        duration: 4000
      });
      toast.present();
    }

  }
