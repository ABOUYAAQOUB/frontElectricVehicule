import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditConsommationComponent } from './edit-consommation/edit-consommation.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"consommation",
    component:EditConsommationComponent
  },
  {
    path:"consommation/:id",
    component:EditConsommationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommationRoutingModule { }
