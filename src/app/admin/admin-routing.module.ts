import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin-createblog',
    component: CreateblogComponent
  },
  {
    path: 'admin-display',
    component: DisplayComponent
  },
  {
    path: 'admin-display',
    component: DisplayComponent
  },
  {
    path:'admin-createcategory',
    component:CreatecategoryComponent
  },
  {
    path:'admin-displaycategory',
    component:DisplaycategoryComponent
  },
  {
    path: 'admin-viewblog/:id',
    component: ViewComponent
  },
  {
    path:'admin-editblog/:id',
    component:EditblogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
