import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateDimRoutingModule } from './date-dim-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DateDimRoutingModule,
    SharedModule
  ]
})
export class DateDimModule { }
