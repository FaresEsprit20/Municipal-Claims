import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { CardIO } from '@ionic-native/card-io';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http, Headers, RequestOptions }  from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppState } from './app.global';
import { ConnecterPage } from '../pages/connecter/connecter';
import { InscriptionPage } from '../pages/inscription/inscription';
import { SettingsPage } from '../pages/settings/settings';
import { EspaceCitoyenPage } from '../pages/espace-citoyen/espace-citoyen';
import { ConsulterTachesPage } from '../pages/consulter-taches/consulter-taches';
import { EspaceAgentPage } from '../pages/espace-agent/espace-agent';
import { SuivreReclamationPage } from '../pages/suivre-reclamation/suivre-reclamation';
import { EffectuerReclamationPage } from '../pages/effectuer-reclamation/effectuer-reclamation';
import { ReclamationPage } from '../pages/reclamation/reclamation';
import { TachePage} from '../pages/tache/tache';
import { ValiderPage} from '../pages/valider/valider';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../pages/services/auth.service';
import { ReclamationManuellePage} from '../pages/reclamation-manuelle/reclamation-manuelle';
import { ReclamationAutomatiquePage} from '../pages/reclamation-automatique/reclamation-automatique';
import { QuitterPage } from '../pages/quitter/quitter';
import { IonicStorageModule } from '@ionic/storage';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { PostProvider } from '../providers/post-provider';
import { InscriptionProvider } from '../providers/inscription-provider';
import { SingleReclamationPage } from '../pages/single-reclamation/single-reclamation';
import { GeocoderProvider } from '../providers/geocoder/geocoder';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    MyApp,
    InscriptionPage,
    ConnecterPage,
    SettingsPage,
    EspaceCitoyenPage,
    EspaceAgentPage,
    ConsulterTachesPage,
    ValiderPage,
    SuivreReclamationPage,
    EffectuerReclamationPage,
    ReclamationPage,
    TachePage,
    ReclamationAutomatiquePage,
    ReclamationManuellePage,
    QuitterPage,
    SingleReclamationPage,
    ChangePasswordPage
  ],

  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot()
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InscriptionPage,
    ConnecterPage,
    SettingsPage,
    EspaceCitoyenPage,
    EspaceAgentPage,
    ConsulterTachesPage,
    SuivreReclamationPage,
    EffectuerReclamationPage,
    ReclamationPage,
    TachePage,
    ValiderPage,
    ReclamationAutomatiquePage,
    QuitterPage,
    SingleReclamationPage,
    ReclamationManuellePage,
    ChangePasswordPage
  ],

  providers: [StatusBar, Geolocation, AppState, AuthService, PostProvider, NativeGeocoder,
     InscriptionProvider, SplashScreen, Camera, FileTransfer, File, CardIO,
      { provide: ErrorHandler, useClass: IonicErrorHandler },
    ]
  })
  export class AppModule { }
