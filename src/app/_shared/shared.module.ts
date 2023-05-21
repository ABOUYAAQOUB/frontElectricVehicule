import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './static-page/master-page/master-page.component';
import { NavBarComponent } from './static-page/nav-bar/nav-bar.component';
import { SideBarComponent } from './static-page/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MasterPageComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]

})
export class SharedModule { }
