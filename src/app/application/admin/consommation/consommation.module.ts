import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommationRoutingModule } from './consommation-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { IndexComponent } from './index/index.component';
import { EditConsommationComponent } from './edit-consommation/edit-consommation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    EditConsommationComponent
  ],
  imports: [
    CommonModule,
    ConsommationRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
    
  ]
})
export class ConsommationModule { }
