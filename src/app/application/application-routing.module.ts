import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from '../_shared/static-page/master-page/master-page.component';

const routes: Routes = [
  {
    path:"",
    component:MasterPageComponent,
    children:[
      {
        path:"admin",
        loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path:"login",
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
