import { Component,  ViewChild, NgModule  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Storage } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { NavController, NavParams, ToastController, LoadingController, Platform, App , ActionSheetController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl,ValidatorFn, AbstractControl } from '@angular/forms';
import { EspaceCitoyenPage } from '../espace-citoyen/espace-citoyen';
import { PostProvider } from '../../providers/post-provider';
import { Http, Headers, RequestOptions }  from '@angular/http';
import 'rxjs/add/operator/catch';


@Component({
  selector:    'page-reclamation-automatique',
  templateUrl: 'reclamation-automatique.html',
})


export class ReclamationAutomatiquePage {

  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };


  private Form : FormGroup;
  public position: string;
  loading: any;
  myphoto: string= '';

  items: any;
  public dt: any;

  cin: string="";
  type_rec: string ="";

  description: string ="";
  gouvernorat: string ="";
  commune: string="";
  postal: string="";
  adresse: string="";
  gouv: string;
  laptitude: number;
  longitude: number;
  geoAccuracy: number;
  geoAddress: string;
  watchLocationUpdates: any; 
  isWatching: boolean;
  cameraData: string;
  base64Image: string;
  
 
 

  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController, 
    private postPvdr: PostProvider, public plt: Platform, private appCtrl: App ,private geolocation: Geolocation, private platform: Platform,
    private formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    private camera: Camera, private transfer: FileTransfer, public actionSheetCtrl: ActionSheetController,
    private file: File, public http: Http, private nativeGeocoder: NativeGeocoder) {

      this.Form = formBuilder.group({
        gouvernorat: ['', Validators.compose([Validators.required])],
        commune: ['', Validators.compose([Validators.required])],
        type_rec: ['', Validators.compose([Validators.required])],
        description : ['', Validators.compose([Validators.required])],
        position : ['',]
      });

      this.loading = this.loadingCtrl.create({
        cssClass: 'my-loading-class',
        spinner: 'bubbles',
        duration: 3000
      });

    this.platform.ready().then(() => {
      //set options
      var options = {
        timeout: 20000 // milliseconds
      }
      //use the geolocation 
         
      this.geolocation.getCurrentPosition(options).then(data => {
        this.laptitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        this.geoAccuracy = data.coords.accuracy; 
        //this.getGeoencoder(this.laptitude,this.longitude);
        this.getGeoencoder(this.laptitude,this.longitude);
      }).catch((err) => {
        console.log("Erreur", err);
      });
      this.watchLocation();
    });  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReclamationAutomatiquePage');
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


  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderReverseResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);
        this.adresse = this.generateAddress(result[0]);
        alert(this.geoAddress);
        alert(this.adresse);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }


  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
   
    return address.slice(0, -2);
  }


  //Start location update watch
  watchLocation() {
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.laptitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      
      
    });
  }

  //Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }

  loadCommune(): void {
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

loadRecAuto()
{
  this.storage.get('session_storage').then((result) => {
    this.dt = result;
    this.cin = this.dt[0].cin;
    console.log(this.cin + 'here');
    this.addReclamationAutomatique(this.cin);
  });
}


    addReclamationAutomatique(cin:string)
    {
      let body = {
        cin: cin ,
        description: this.description ,
        gouvernorat: this.gouv,
        commune: this.commune,
        postal: this.postal ,
        adresse : this.adresse ,
        type_rec: this.type_rec ,
        images: this.cameraData ,
        laptitude : this.laptitude ,
        longitude : this.longitude  ,
        aksi : 'add_RecAutomatique'
      }  
      let type = "application/json; charset= UTF-8";
      let headers = new Headers ({ 'Content-Type': type });
      let options = new RequestOptions ({ headers : headers });
      this.postPvdr.postData(body) .subscribe((data) => {
      });
    }


    onSubmit(form: NgForm)
    {
      this.type_rec=this.Form.controls.type_rec.value;
      console.log(this.type_rec);
      this.description=this.Form.controls.description.value;
      this.gouvernorat = this.Form.controls.gouvernorat.value;
      console.log(this.gouvernorat);
      this.commune = this.Form.controls.commune.value;
      console.log(this.commune);
      console.log(this.description);
      console.log(this.laptitude);
      console.log(this.longitude);

if (this.base64Image!='' && this.laptitude != null && this.longitude!=null)
{
  console.log('obligatoire');

      this.loadRecAuto();
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

}else if(this.base64Image=='') {
  const toast = this.toastCtrl.create({
    message: 'Echec ! ; Veuillez Capturer ou importer une photo !',
    duration: 3000
  });
  toast.present();
} else if (this.laptitude == null && this.longitude== null) {
  const toast = this.toastCtrl.create({
    message: 'Echec ! ; Erreur de géolocation !',
    duration: 3000
  });
  toast.present();
}
    }
    

  }
