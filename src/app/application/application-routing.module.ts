import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from '../_shared/static-page/master-page/master-page.component';
import { AuthentificationGuardGuard } from '../_core/guards/authentification-guard.guard';
import { AfterGuardGuard } from '../_core/guards/after-guard.guard';


const routes: Routes = [
  {
    path:"",
    component:MasterPageComponent,
    children:[
      {
        path:"admin",
        loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule),
        canActivate:[AuthentificationGuardGuard]
      }
    ]
  },
  {
    path:"login",
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule),
    canActivate:[AfterGuardGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
