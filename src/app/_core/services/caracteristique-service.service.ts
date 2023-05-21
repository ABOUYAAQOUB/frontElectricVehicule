import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caracteristique } from '../model/Caracteristique.Model';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiqueServiceService {

  private readonly base_URL = "http://localhost:8081/api/";
  constructor(private httpClient:HttpClient) { }

  getCaracteristiques(){
    return this.httpClient.get<Caracteristique>(this.base_URL+"caracteristiques");
  }

  getCaracteristique(id:number){
    return this.httpClient.get<Caracteristique>(this.base_URL+"caracteristique/"+id);
  }

  addCaracteristique(Caracteristique:Caracteristique){
    return this.httpClient.post<Caracteristique>(this.base_URL+"caracteristique",Caracteristique);
  }

  updateCaracteristique(id:number,caracteristique:Caracteristique){
    return this.httpClient.put<Caracteristique>(this.base_URL+"caracteristique/"+id,caracteristique);
  }

  deleteCaracteristique(id:number){
    return this.httpClient.delete<Caracteristique>(this.base_URL+"caracteristique/"+id);
  }
}
