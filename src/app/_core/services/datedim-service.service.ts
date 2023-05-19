import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateDim } from '../model/DateDim';


@Injectable({
  providedIn: 'root'
})
export class DatedimServiceService {


  private readonly baseApiUrl = "http://localhost:8081/api/";
  constructor (private httpClient : HttpClient){}

  getDates(){
    return this.httpClient.get<DateDim>(this.baseApiUrl+"dates");
  }

  getDate(id:number){
    return this.httpClient.get<DateDim>(this.baseApiUrl+"date/"+id);
  }

  deleteDate(id:number){
    return this.httpClient.delete<DateDim>(this.baseApiUrl+"date/"+id);
  }

  addDate(date:DateDim){
    return this.httpClient.post<DateDim>(this.baseApiUrl+"date",date);
  }

  updateDate(id:number,date:DateDim){
    return this.httpClient.put<DateDim>(this.baseApiUrl+"date/"+date.id,date);
  }
}
