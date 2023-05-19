import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IndexlocaliteComponent } from './indexlocalite/indexlocalite.component';
import { AddlocaliteComponent } from './addlocalite/addlocalite.component';

const routes: Routes = [
  {path : '',component : IndexlocaliteComponent},
  {path : 'localite',component : AddlocaliteComponent},
  {path : 'localite/:id',component : AddlocaliteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocaliteRoutingModule { }
