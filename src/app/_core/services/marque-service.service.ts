import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from '../model/Marque';
@Injectable({
  providedIn: 'root'
})
export class MarqueServiceService {

  private readonly base_URL = "http://localhost:8081/api/";

  constructor(private httpClient:HttpClient) { }

  getMarques(){
    return this.httpClient.get<Marque>(this.base_URL+"marques");
  }

  getMarque(id:number){
    return this.httpClient.get<Marque>(this.base_URL+"marque/"+id);
  }

  createMarque(marque:Marque){
    return this.httpClient.post<Marque>(this.base_URL+"marque",marque);
  }

  updateMarque(id:number,marque:Marque){
    return this.httpClient.put<Marque>(this.base_URL+"marque/"+id,marque);
  }

  deleteMarque(id:number){
    return this.httpClient.delete<Marque>(this.base_URL+"marque/"+id);
  }
}
