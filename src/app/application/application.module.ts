import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    FormsModule
    
  ]
})
export class ApplicationModule { }
