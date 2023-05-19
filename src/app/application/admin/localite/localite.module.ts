import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocaliteRoutingModule } from './localite-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { IndexlocaliteComponent } from './indexlocalite/indexlocalite.component';
import { AddlocaliteComponent } from './addlocalite/addlocalite.component';


@NgModule({
  declarations: [
    IndexlocaliteComponent,
    AddlocaliteComponent
  ],
  imports: [
    CommonModule,
    LocaliteRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LocaliteModule { }
