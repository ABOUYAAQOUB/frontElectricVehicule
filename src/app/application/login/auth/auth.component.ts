import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/_core/model/admin.model';
import { AuthServiceService } from 'src/app/_core/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  loginFormGroup!:FormGroup;
  adminIsAuth!:Admin|any;
  constructor(private fb:FormBuilder,private router:Router,private service:AuthServiceService){}
  
  ngOnInit(): void {

    this.loginFormGroup = this.fb.group({
      nom:this.fb.control(""),
      password:this.fb.control("")
    });
  }

  logincheck(){
    this.service.saveAuthAdmin(this.adminIsAuth).subscribe(res => {
      this.router.navigate(["/carelec/admin/dashboard"]);
    });
  }

  handlelogin(){
    
    const admin:Admin|any = {
      nom:this.loginFormGroup.value.nom,
      password:this.loginFormGroup.value.password
    }
    this.service.authcheck(admin).subscribe(res =>{
      this.adminIsAuth = res;
      this.logincheck();
    });
  }
}
