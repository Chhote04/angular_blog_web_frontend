import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { ViewComponent } from './view/view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DisplayComponent,
    CreateblogComponent,
    ViewComponent,
    SidebarComponent,
    CreatecategoryComponent,
    DisplaycategoryComponent,
    EditblogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
