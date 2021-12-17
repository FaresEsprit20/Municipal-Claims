import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { ConnecterPage } from '../connecter/connecter';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import { InscriptionProvider } from '../../providers/inscription-provider';
import { Http, Headers, RequestOptions }  from '@angular/http';


@Component({
	selector: 'page-inscription',
	templateUrl: 'inscription.html',
})

export class InscriptionPage {
	private Form : FormGroup;
	loading: any;

	cin: string = "";
	fullname: string ="";
	mailadress: string="";
	password: string= "";
	password_repeat :string= "";

	constructor(public navCtrl: NavController, private postPvdr: InscriptionProvider,
		public loadingCtrl: LoadingController, public http: Http,
		public toastCtrl: ToastController, private formBuilder: FormBuilder) {


			this.Form = formBuilder.group({
				cin: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])] ,
				fullname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z _]+[a-zA-Z _]'), Validators.minLength(7), Validators.maxLength(30) ])],
				mailadress: ['', Validators.compose([Validators.required , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.email])],
				password: ['', Validators.compose([Validators.required, Validators.minLength(6),  Validators.maxLength(15) ])],
				password_repeat: ['', Validators.compose([Validators.required, Validators.minLength(6),  Validators.maxLength(15), Validators.required,this.equalto('password')])]

			});
			this.loading = this.loadingCtrl.create({
				cssClass: 'my-loading-class',
				spinner: 'bubbles',
				duration: 3000
			});
		}

		
		ionViewDidLoad() {
			console.log('ionViewDidLoad InscriptionPage');
		}


		addRgister(){
			let body = {
				cin: this.cin ,
				fullname: this.fullname ,
				mailadress: this.mailadress ,
				password: this.password
			}

			let type = "application/json; charset= UTF-8";
			let headers = new Headers ({ 'Content-Type': type });
			let options = new RequestOptions ({ headers : headers });


			this.postPvdr.postData(body) .subscribe((data) => {

				if ( data.success )
				{

					const toast = this.toastCtrl.create({
						message: 'Félicitations ; Vous êtes inscrit !',
						duration: 4000
					});

					this.navCtrl.push(ConnecterPage);
					toast.present();

				}else if (data.success == false){

					const toast = this.toastCtrl.create({
						message:  'Utilisateur déja incrit !',
						duration: 4000
					});
					  toast.present();
				}
			});
		}


		onSubmit(form: NgForm)
		{
			this.cin=this.Form.controls.cin.value;
			console.log(this.cin);
			this.fullname=this.Form.controls.fullname.value;
			console.log(this.fullname);
			this.mailadress=this.Form.controls.mailadress.value;
			console.log(this.mailadress);
			this.password=this.Form.controls.password.value;
			console.log(this.password);
            this.addRgister();
			this.loading.present();
			setTimeout(
				() => {
					console.log(form.value);
					this.loading.dismiss();
				}, 2000
			);
			  this.Form.reset();
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
