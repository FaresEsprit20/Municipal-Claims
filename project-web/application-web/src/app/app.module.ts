import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// tslint:disable-next-line: max-line-length
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ServerService } from './services/server.service';
import { ReclamationService } from './services/reclamation.service';
import { InscriptionAdminComponent } from './inscription-admin/inscription-admin.component';
import { ReclamationRecuComponent } from './reclamation-recu/reclamation-recu.component';
import { TacheComponent } from './tache/tache.component';
import { ReclamationRefuseComponent } from './reclamation-refuse/reclamation-refuse.component';
import { GererAgentComponent } from './gerer-agent/gerer-agent.component';
import { ReclamationAccepteComponent } from './reclamation-accepte/reclamation-accepte.component';
import { AjouterAgentComponent } from './ajouter-agent/ajouter-agent.component';
import { SupprimerAgentComponent } from './supprimer-agent/supprimer-agent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { JustificationComponent } from './justification/justification.component';
import { JustificationTacheComponent } from './justification-tache/justification-tache.component';
import { ParametresAdminComponent } from './parametres-admin/parametres-admin.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularWebStorageModule } from 'angular-web-storage';
import { ToastrModule } from 'ngx-toastr';
import { ConsulterTachesComponent } from './consulter-taches/consulter-taches.component';
import { AffecterTachesComponent } from './affecter-taches/affecter-taches.component';
import { MatTableModule } from '@angular/material/table';
import { JustificationAdminComponent } from './justification-admin/justification-admin.component';
import { JtcComponent } from './jtc/jtc.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    EspaceAdminComponent,
    HomeComponent,
    NotFoundComponent,
    InscriptionAdminComponent,
    ReclamationRecuComponent,
    TacheComponent,
    ReclamationRefuseComponent,
    GererAgentComponent,
    ReclamationAccepteComponent,
    AjouterAgentComponent,
    SupprimerAgentComponent,
    JustificationComponent,
    JustificationTacheComponent,
    ParametresAdminComponent,
    ConsulterTachesComponent,
    AffecterTachesComponent,
    JustificationAdminComponent,
    JtcComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AngularWebStorageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    DataTablesModule,
    MatTableModule
  ],

  providers: [AuthService, AuthGuard, ReclamationService, ServerService],
  bootstrap: [AppComponent]
})


export class AppModule { }

