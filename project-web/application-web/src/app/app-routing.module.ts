import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { InscriptionAdminComponent } from './inscription-admin/inscription-admin.component';
import { ReclamationRecuComponent } from './reclamation-recu/reclamation-recu.component';
import { TacheComponent } from './tache/tache.component';
import { ReclamationAccepteComponent } from './reclamation-accepte/reclamation-accepte.component';
import { ReclamationRefuseComponent } from './reclamation-refuse/reclamation-refuse.component';
import { SupprimerAgentComponent } from './supprimer-agent/supprimer-agent.component';
import { AjouterAgentComponent } from './ajouter-agent/ajouter-agent.component';
import { JustificationComponent } from './justification/justification.component';
import { JustificationTacheComponent } from './justification-tache/justification-tache.component';
import { ParametresAdminComponent } from './parametres-admin/parametres-admin.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ConsulterTachesComponent } from './consulter-taches/consulter-taches.component';
import { AffecterTachesComponent } from './affecter-taches/affecter-taches.component';
import { JustificationAdminComponent } from './justification-admin/justification-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { JtcComponent } from './jtc/jtc.component';


const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'inscription-admin', component: InscriptionAdminComponent },
  { path: 'espace-admin', canActivate: [AuthGuard], component: EspaceAdminComponent },
  { path: 'consulter-taches', canActivate: [AuthGuard], component: ConsulterTachesComponent },
  { path: 'affecter-taches', canActivate: [AuthGuard], component: AffecterTachesComponent },
  { path: 'reclamation-recu', canActivate: [AuthGuard], component: ReclamationRecuComponent },
  { path: 'reclamation-accepte', canActivate: [AuthGuard], component: ReclamationAccepteComponent },
  { path: 'reclamation-refuse', canActivate: [AuthGuard], component: ReclamationRefuseComponent },
  { path: 'justification', canActivate: [AuthGuard], component: JustificationComponent },
  { path: 'jtc', canActivate: [AuthGuard], component: JtcComponent },
  { path: 'justification-tache', canActivate: [AuthGuard], component: JustificationTacheComponent },
  { path: 'justification-admin', canActivate: [AuthGuard], component: JustificationAdminComponent },
  { path: 'tache', canActivate: [AuthGuard], component: TacheComponent },
  { path: 'ajouter-agent', canActivate: [AuthGuard], component: AjouterAgentComponent },
  { path: 'supprimer-agent', canActivate: [AuthGuard], component: SupprimerAgentComponent },
  { path: 'parametres-admin', canActivate: [AuthGuard], component: ParametresAdminComponent },
  { path: 'not-found',  component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    Ng4LoadingSpinnerModule.forRoot(),
   ToastrModule.forRoot()
  ],

  exports: [RouterModule]

})
export class AppRoutingModule { }
