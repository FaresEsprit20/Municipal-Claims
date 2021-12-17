import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ViewController} from 'ionic-angular';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { Storage } from '@ionic/storage';
import { InscriptionPage } from '../inscription/inscription';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { EspaceAgentPage } from '../espace-agent/espace-agent';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl,ValidatorFn,AbstractControl } from '@angular/forms';
import { PostProvider } from '../../providers/post-provider';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'page-connecter',
  templateUrl: 'connecter.html',
})
export class ConnecterPage {

  loading: any;
  private Form : FormGroup;
  cin: string = "";
  password: string= "";

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,
    private postPvdr: PostProvider, public authService: AuthService,
    public http: Http, public toastCtrl: ToastController,
    public storage: Storage) {

      this.Form = formBuilder.group({
        cin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])] ,
        password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15) ])],
      });

    }

    ionViewDidLoad()
    {
      console.log('ionViewDidLoad ConnecterPage');
    }

    addLogin()
    {
      let body =
      {
        cin: this.cin ,
        password: this.password ,
        aksi: 'add_Login'
      }

      let type = "application/json; charset= UTF-8";
      let headers = new Headers ({ 'Content-Type': type });
      let options = new RequestOptions ({ headers : headers });

      this.postPvdr.postData(body) .subscribe( (data) => {
        var alerts= data.msg;
        if(data.success){
          this.storage.set('session_storage', data.profiles);
          console.log(data.profiles);
          if(data.occupation){
            console.log('connexion réussie');
            this.navCtrl.push(EspaceCitoyenPage);
          }else if (data.occupation== false)
          {
            console.log('connexion réussie');
            this.navCtrl.push(EspaceAgentPage);
          }

        }else if( data.success== false) {
          console.log('connexion échouée');
          const toast = this.toastCtrl.create({
            message: alerts ,
            duration: 2000
          });
          toast.present();
        }
      });
    }

    onSubmit(form: NgForm)
    {
      console.log (this.authService.isAuth);
      this.cin=this.Form.controls.cin.value;
      console.log (this.cin);
      this.password=this.Form.controls.password.value;
      console.log (this.password);
      this.addLogin();
      this.authService.signIn();
      console.log(this.authService.isAuth);
      console.log(form.value);
      this.Form.reset();
    }

  }
