import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/_core/services/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  admin!:string|any;
  constructor(private service:AuthServiceService,private router:Router){
    this.admin = localStorage.getItem("Admin");
  }

  logout(){
    this.service.logout();
    this.router.navigate(["/carelec/login"]);
  }
}
