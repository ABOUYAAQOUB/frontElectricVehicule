import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateDim } from 'src/app/_core/model/DateDim.model';
import { DatedimServiceService } from 'src/app/_core/services/datedim-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
  })
  export class IndexComponent  implements OnInit{

  dates : DateDim[] | any;
  constructor(private dateServiceService:DatedimServiceService,private router : Router){}

  

  ngOnInit(): void {
    this.dateServiceService.getDates().subscribe(res => {
    this.dates = res;
    });
  }
  deleteDate(id:number){
    this.dateServiceService.deleteDate(id).subscribe(res =>{
      this.dateServiceService.getDates().subscribe(res =>{
        this.dates = res;
      });
    });
  }

}