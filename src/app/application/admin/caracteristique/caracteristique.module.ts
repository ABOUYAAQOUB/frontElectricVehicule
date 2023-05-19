import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CaracteristiqueRoutingModule } from './caracteristique-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { IndexComponent } from './index/index.component';
import { CaracteristiqueEditComponent } from './caracteristique-edit/caracteristique-edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    CaracteristiqueEditComponent
  ],
  imports: [
    CommonModule,
    CaracteristiqueRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CaracteristiqueModule { }
