import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ActionSheetController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { PostProvider } from '../../providers/post-provider';
import { EspaceAgentPage } from '../espace-agent/espace-agent';
import { Storage } from '@ionic/storage';
import { TachePage } from '../tache/tache';


@Component({
	selector: 'page-valider',
	templateUrl: 'valider.html',
})


export class ValiderPage {
	
	private Form: FormGroup;
	loading: any;
	myphoto: any;
	items: any;
	public dt: any;
	cin: string = "";
	tache: string;
	tache_id: string = "";
	etat_tache: string = "";
	photo: string = "";
	cameraData: string;
	base64Image: string;


	constructor(public navCtrl: NavController, public http: Http, private camera: Camera, public storage: Storage, public actionSheetCtrl: ActionSheetController,
		private postPvdr: PostProvider, public toastCtrl: ToastController, private formBuilder: FormBuilder,
		public loadingCtrl: LoadingController) 
		{
		this.Form = formBuilder.group({
			tache_id: ['', Validators.compose([Validators.required])],
			etat_tache: ['', Validators.compose([Validators.required])],
		});
		this.loading = this.loadingCtrl.create({
			cssClass: 'my-loading-class',
			spinner: 'bubbles',
			duration: 3000
		});
	}


	ionViewWillEnter() {
		console.log('ionViewWillEnter ValiderPage');
		this.storage.get('session_storage').then((result) => {
			this.dt = result;
			this.cin = this.dt[0].cin;
			console.log(this.cin + 'here');
			this.onTache(this.cin);
		});	
	}


	presentActionSheet() {
		const actionSheet = this.actionSheetCtrl.create({
			title: 'Choix du média',
			buttons: [
				{
					text: 'Caméra',
					icon: 'camera',
					handler: () => {
						this.takePhoto();
						console.log('Caméra clicked');
					}
				}, {
					text: 'Gallerie',
					icon: 'image',
					handler: () => {
						this.openGallery();
						console.log('Gallerie clicked');
					}
				}, {
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		actionSheet.present();
	}


	takePhoto() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then((imageData) => {
			this.cameraData = imageData;
			this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
		});
	}

	//Gallerie
	openGallery() {
		const options: CameraOptions = {
			quality: 100,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then((imageData) => {
			this.cameraData = imageData;
			this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
		});
	}


	onTache(cin:string)
	{
		let body = {
			cin: cin,
			aksi: 'load_tache'
		}
		console.log(body);
		let type = "application/json; charset= UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
		this.postPvdr.postData(body).subscribe((data) => {
			this.items = data.items;
			console.log(data.items);
		});
	}


	loadTache() {
		this.storage.get('session_storage').then((result) => {
			this.dt = result;
			this.cin = this.dt[0].cin;
			console.log(this.cin + 'here');
			this.onValidate(this.cin);
		});
	}


	onValidate(cin: string) {
		let body = {
			cin: cin,
			tache_id: this.tache_id,
			etat_tache: this.etat_tache,
			images: this.cameraData,
			aksi: 'valider'
		}
		let type = "application/json; charset= UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
		this.postPvdr.postData(body).subscribe((data) => {
		});
	}


	onSubmit(form: NgForm)
	 {
		this.tache_id = this.Form.controls.tache_id.value;
		console.log(this.tache_id);
		this.etat_tache = this.Form.controls.etat_tache.value;
		console.log(this.etat_tache);
		if (this.base64Image != '' && this.base64Image != null && this.cameraData != null) {
		this.loadTache();
		this.loading.present();
		setTimeout(
			() => {
				console.log(form.value);
				this.navCtrl.push(EspaceAgentPage);
				const toast = this.toastCtrl.create({
					message: 'Félicitations ; Votre tache a été validée avec succés !',
					duration: 3000
				});
				toast.present();
				this.loading.dismiss();
			}, 2000
		);
		}else {
			const toast = this.toastCtrl.create({
				message: 'Echec ! ; Veuillez Capturer ou Importer une photo !',
				duration: 3000
			});
			toast.present();
		}
	}


}
