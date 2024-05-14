import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '', component: ClientsComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddEditComponent },
      { path: 'edit/:id', component: AddEditComponent },
      { path: 'view/:id', component: ViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
