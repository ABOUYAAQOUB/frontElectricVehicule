import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditMarqueComponent } from './edit-marque/edit-marque.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"marque/:id",
    component:EditMarqueComponent
  },
  {
    path:"marque",
    component:EditMarqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarqueRoutingModule { }
