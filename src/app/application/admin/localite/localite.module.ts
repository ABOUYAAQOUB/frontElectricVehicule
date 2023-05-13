import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocaliteRoutingModule } from './localite-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocaliteRoutingModule,
    SharedModule
  ]
})
export class LocaliteModule { }
