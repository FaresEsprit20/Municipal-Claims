import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams, ToastController, LoadingController, App, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl,ValidatorFn,AbstractControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { PostProvider } from '../../providers/post-provider';
import { Http, Headers, RequestOptions }  from '@angular/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'page-reclamation-manuelle',
  templateUrl: 'reclamation-manuelle.html',
})

export class ReclamationManuellePage {
  
  private Form : FormGroup;
  loading: any;
  myphoto: string='';
  public dt: any;
  items: any;

  cin: string="";
  type_rec: string ="";
  gouvernorat: string ="";
  gouv: string;
  commune: string="";
  postal: string="";
  description: string ="";
  adresse: string="";
  cameraData: string;
  base64Image: string;


  constructor(public navCtrl: NavController, private postPvdr: PostProvider, public storage: Storage,
    public toastCtrl: ToastController, private camera: Camera, private appCtrl: App, private formBuilder: FormBuilder,
    public http: Http, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController) {

    this.Form = formBuilder.group({
      gouvernorat: ['', Validators.compose([Validators.required])],
      commune: ['', Validators.compose([Validators.required])],
      type_rec: ['', Validators.compose([Validators.required])],
      postal: ['', Validators.compose([Validators.minLength(4), Validators.pattern('[0-9]*'), Validators.maxLength(4)])],
      adresse : ['', Validators.compose([Validators.required , Validators.maxLength(60) ])],
      description : ['', Validators.compose([Validators.required])]
    });

    this.loading = this.loadingCtrl.create({
      cssClass: 'my-loading-class',
      spinner: 'bubbles',
      duration: 3000
    });
  }

  ionViewWillEnter()
  {
    console.log('ionViewWillEnter ReclamationManuellePage');
  }

  //actionsheet
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

  loadCommune(): void
{
  let body = {
    gouvernorat: this.gouv,
    aksi: 'load_commune'
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

  loadRecManuelle() {
    this.storage.get('session_storage').then((result) => {
      this.dt = result;
      this.cin = this.dt[0].cin;
      console.log(this.cin + 'here');
      this.addReclamationManuelle(this.cin);
    });
  }

      addReclamationManuelle(cin:string)
      {
      		let body = {
      			cin: cin,
      			description: this.description ,
            commune : this.commune ,
            gouvernorat: this.gouvernorat ,
            postal: this.postal ,
            adresse : this.adresse ,
      			type_rec: this.type_rec ,
      			images: this.cameraData ,
      			aksi: 'add_RecManuelle'
          }
          console.log(body);
        let type = "application/json; charset= UTF-8";
        let headers = new Headers({ 'Content-Type': type });
        let options = new RequestOptions({ headers: headers });
        this.postPvdr.postData(body).subscribe((data) => {
        });
      
      	}


  onSubmit(form: NgForm) {

    
    this.type_rec= this.Form.controls.type_rec.value;
    console.log(this.type_rec);
    this.gouvernorat= this.Form.controls.gouvernorat.value;
    console.log(this.gouvernorat);
    this.commune= this.Form.controls.commune.value;
    console.log(this.commune);
    this.postal= this.Form.controls.postal.value;
    console.log(this.postal);
    this.description= this.Form.controls.description.value;
    console.log(this.description);
    this.adresse= this.Form.controls.adresse.value;
    console.log(this.adresse);
    if (this.base64Image != '' && this.base64Image != null && this.cameraData!= null) { 
      console.log('obligatoire');
    this.loadRecManuelle();
    this.loading.present();
    setTimeout(
      () => {
        console.log(form.value);
        this.navCtrl.push(EspaceCitoyenPage);
        const toast = this.toastCtrl.create({
          message: 'Félicitations ; Votre réclamation a été effectué !',
          duration: 3000
        });
        toast.present();
        this.loading.dismiss();
      }, 2000
    );
  }else {
  const toast = this.toastCtrl.create({
    message: 'Echec ! ; Veuillez Capturer ou importer une photo !',
    duration: 3000
  });
  toast.present();
}
  
  
  }

}
