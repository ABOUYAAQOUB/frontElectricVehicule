import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { VehiculeListeComponent } from './vehicule-liste/vehicule-liste.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    VehiculeListeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
