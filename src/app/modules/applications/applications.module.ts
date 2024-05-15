import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ListComponent,
    AddEditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
