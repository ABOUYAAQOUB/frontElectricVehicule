import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localite } from '../model/Localite';

@Injectable({
  providedIn: 'root'
})
export class LocaliteServiceService {
  private readonly baseApiUrl = "http://localhost:8081/api/";
  constructor(private httpClient: HttpClient) { }

  getLocalites(){
    return this.httpClient.get<Localite>(this.baseApiUrl+"localites");
  }

  getLocalite(id:number){
    return this.httpClient.get<Localite>(this.baseApiUrl+"localite/"+id);
  }

  deleteLocalite(id:number){
    return this.httpClient.delete<Localite>(this.baseApiUrl+"localite/"+id);
  }

  addLocalite(localite:Localite){
    return this.httpClient.post<Localite>(this.baseApiUrl+"localite",localite);
  }

  updateLocalite(id:number,localite:Localite){
    return this.httpClient.put<Localite>(this.baseApiUrl+"localite/"+localite.id,localite);
  }

}
