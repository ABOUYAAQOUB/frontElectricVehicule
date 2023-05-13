import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommationRoutingModule } from './consommation-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsommationRoutingModule,
    SharedModule
  ]
})
export class ConsommationModule { }
