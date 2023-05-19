import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { IndexComponent } from './index/index.component';
import { EditMarqueComponent } from './edit-marque/edit-marque.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    EditMarqueComponent
  ],
  imports: [
    CommonModule,
    MarqueRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MarqueModule { }
