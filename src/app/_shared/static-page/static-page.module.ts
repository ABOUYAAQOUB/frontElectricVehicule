import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page/master-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    MasterPageComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaticPageModule { }
