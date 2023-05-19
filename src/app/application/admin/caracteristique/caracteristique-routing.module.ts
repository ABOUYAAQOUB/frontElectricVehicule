import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CaracteristiqueEditComponent } from './caracteristique-edit/caracteristique-edit.component';

const routes: Routes = [
  {
    path:"",
    component: IndexComponent
  },
  {
    path:"create",
    component:CaracteristiqueEditComponent
  },
  {
    path:"create/:id",
    component:CaracteristiqueEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracteristiqueRoutingModule { }
