import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Caracteristique } from 'src/app/_core/model/Caracteristique.Model';
import { Consommation } from 'src/app/_core/model/Consommation.model';
import { DateDim } from 'src/app/_core/model/DateDim.model';
import { Localite } from 'src/app/_core/model/Localite.model';
import { Marque } from 'src/app/_core/model/Marque.model';
import { CaracteristiqueServiceService } from 'src/app/_core/services/caracteristique-service.service';
import { ConsommationServiceService } from 'src/app/_core/services/consommation-service.service';
import { DatedimServiceService } from 'src/app/_core/services/datedim-service.service';
import { LocaliteServiceService } from 'src/app/_core/services/localite-service.service';
import { MarqueServiceService } from 'src/app/_core/services/marque-service.service';

@Component({
  selector: 'app-edit-consommation',
  templateUrl: './edit-consommation.component.html',
  styleUrls: ['./edit-consommation.component.css']
})
export class EditConsommationComponent implements OnInit{
  
  marques!:Marque[]|any;
  localites!:Localite[]|any;
  dateDims!:DateDim[]|any;
  caracteristiques!:Caracteristique[]|any;
  consommation!:Consommation|any;
  consommationId!:number;
  registerform!:FormGroup

  constructor(
      private service:ConsommationServiceService,
      private servicemarque:MarqueServiceService,
      private servicelocalite:LocaliteServiceService,
      private servicedateDim:DatedimServiceService,
      private servicecaracteristique:CaracteristiqueServiceService,
      private router:Router,
      private activatedRoute:ActivatedRoute,
      private fb:FormBuilder
      ){
        this.consommationId = activatedRoute.snapshot.params['id']
      }

  ngOnInit(): void {

    this.consommation = new Consommation();
    
    this.servicemarque.getMarques().subscribe(res =>{
      console.log(res);
      this.marques = res;
    });

    this.servicelocalite.getLocalites().subscribe(res => {
      this.localites = res;
    });

    this.servicedateDim.getDates().subscribe(res => {
      this.dateDims = res;
    });

    this.servicecaracteristique.getCaracteristiques().subscribe(res =>{
      this.caracteristiques = res;
    });

    this.createform();

    this.editConsommation();
  }

  createform(){
    this.registerform = this.fb.group({
      marque:[''],
      localite:[''],
      caracteristique:[''],
      date:['']
    });
  }

  editConsommation(){
    if(this.consommationId != null){
      this.service.getConsommation(this.consommationId).subscribe(res =>{
        this.consommation = res;
        this.registerform.setValue({
          marque:this.consommation.marque.id,
          localite:this.consommation.localite.id,
          caracteristique:this.consommation.caracteristique.id,
          date:this.consommation.dateDim.id
        });
      });
    }
  }

  addConsommation(){
    if(this.consommationId != null){
      this.consommation = {
        id:this.consommationId,
        marque:{id:this.registerform.value['marque']},
        localite:{id:this.registerform.value['localite']},
        caracteristique:{id:this.registerform.value['caracteristique']},
        dateDim:{id:this.registerform.value['date']}
      };
      
      console.log("update");
      console.log(this.consommation);
      this.service.updateConsommation(this.consommationId,this.consommation).subscribe(res => {
        console.log(res);
      });
    }
    else{

      this.consommation = {
        marque:{id:this.registerform.value['marque']},
        localite:{id:this.registerform.value['localite']},
        caracteristique:{id:this.registerform.value['caracteristique']},
        dateDim:{id:this.registerform.value['date']}
      };
      
      console.log("add");
      console.log(this.consommation);
      this.service.addConsommation(this.consommation).subscribe(res =>{
        console.log(res);
      });
    }
    this.router.navigate(["carelec/admin/Consommation"]);
  }

}
