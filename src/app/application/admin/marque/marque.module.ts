import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MarqueRoutingModule,
    SharedModule
  ]
})
export class MarqueModule { }
