import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path : '',
    component : IndexComponent
  },
  {
    path : 'date',
    component : AddComponent
  },
  {
    path : 'date/:id',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateDimRoutingModule { }
