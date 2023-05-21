import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consommation } from '../model/Consommation';


@Injectable({
  providedIn: 'root'
})
export class ConsommationServiceService {

  private readonly base_URL = "http://localhost:8081/api/";

  constructor(private httpClient:HttpClient) { }

  getConsommations(){
    return this.httpClient.get<Consommation>(this.base_URL+"consommations");
  }

  getConsommation(id:number){
    return this.httpClient.get<Consommation>(this.base_URL+"consommation/"+id);
  }

  addConsommation(consommation:Consommation){
    return this.httpClient.post<Consommation>(this.base_URL+"consommation",consommation);
  }

  updateConsommation(id:number,consommation:Consommation){
    return this.httpClient.put<Consommation>(this.base_URL+"consommation/"+id,consommation);
  }

  deleteConsommation(id:number){
    return this.httpClient.delete<Consommation>(this.base_URL+"consommation/"+id);
  }

}
