import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consommation } from 'src/app/_core/model/Consommation.model';
import { ConsommationServiceService } from 'src/app/_core/services/consommation-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  consommations!:Consommation[] |any;

  constructor(private service:ConsommationServiceService,private router:Router){}

  ngOnInit(): void {
    this.service.getConsommations().subscribe(res =>{
      this.consommations = res;
      console.log(this.consommations);
    })
  }

  deleteConsommation(id:number){
    this.service.deleteConsommation(id).subscribe(res =>{
      console.log(res);
    });
    location.reload();
  }

}
