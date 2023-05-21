import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'src/assets/vendor/tinymce/tinymce';
import { Admin } from '../model/admin.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private readonly base_URL = "http://localhost:8081/api/admin/login";
  constructor(private httpClient:HttpClient) { }
  existAdmin!:Admin|any;
  authcheck(admin:Admin){
    return this.httpClient.post<Admin>(this.base_URL,admin);   
  }

  saveAuthAdmin(admin:Admin){

    this.existAdmin = admin;
    localStorage.setItem("Eta","checked");
    localStorage.setItem("Admin",this.existAdmin.nom);

    return of(true);
  }

  isAuthentefication(){
    return localStorage.getItem("Admin") != null;
  }

  logout(){
    this.existAdmin = null;
    localStorage.clear()
    return of(true);
  }

}
