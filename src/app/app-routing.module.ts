import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const clientsModule = () => import('./modules/clients/clients.module').then(x => x.ClientsModule);
const applicationsModule = () => import('./modules/applications/applications.module').then(x => x.ApplicationsModule);
const homeModule = () => import('./modules/home/home.module').then(x => x.HomeModule);


const routes: Routes = [
  { path: '', loadChildren: homeModule},
  { path: 'clients', loadChildren: clientsModule },
  { path: 'applications', loadChildren: applicationsModule },
  // { path: 'new', component: RegistrationFormComponent },
  // { path: 'edit/:id', component: RegistrationFormComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
