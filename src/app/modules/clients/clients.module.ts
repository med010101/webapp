import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    ClientsComponent,
    ListComponent,
    AddEditComponent,
    ViewComponent,
  ],
  imports: [
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
