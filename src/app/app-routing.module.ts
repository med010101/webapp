import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const clientsModule = () => import('./modules/clients/clients.module').then(x => x.ClientsModule);

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'clients', loadChildren: clientsModule },
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
