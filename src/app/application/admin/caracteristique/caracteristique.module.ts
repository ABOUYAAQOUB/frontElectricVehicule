import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaracteristiqueRoutingModule } from './caracteristique-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CaracteristiqueRoutingModule,
    SharedModule
  ]
})
export class CaracteristiqueModule { }
