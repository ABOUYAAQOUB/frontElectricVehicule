import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateDimRoutingModule } from './date-dim-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    DateDimRoutingModule,
    SharedModule,
    FormsModule
    
  ]
})
export class DateDimModule { }
