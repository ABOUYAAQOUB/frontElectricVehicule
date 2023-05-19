import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caracteristique } from 'src/app/_core/model/Caracteristique.Model';
import { CaracteristiqueServiceService } from 'src/app/_core/services/caracteristique-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  caracteristiques:Caracteristique[] | any;
  constructor(private caraterstiqueService:CaracteristiqueServiceService, private  router:Router){

  }
  ngOnInit(): void {
    console.log("ok pok");
    this.caraterstiqueService.getCaracteristiques().subscribe(res => {
      this.caracteristiques=res;
      console.log(res);
    });
  }
  deleteCaracteristique(id:number){
    this.caraterstiqueService.deleteCaracteristique(id).subscribe(res => {
      this.caraterstiqueService.getCaracteristiques().subscribe(res =>{
        this.caracteristiques = res;
      });
    });
  }

}
