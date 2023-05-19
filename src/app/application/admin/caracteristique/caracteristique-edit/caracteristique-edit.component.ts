import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caracteristique } from 'src/app/_core/model/Caracteristique.Model';
import { CaracteristiqueServiceService } from 'src/app/_core/services/caracteristique-service.service';

@Component({
  selector: 'app-caracteristique-edit',
  templateUrl: './caracteristique-edit.component.html',
  styleUrls: ['./caracteristique-edit.component.css']
})
export class CaracteristiqueEditComponent implements OnInit{
  caracteristiqueId:number|null;
  caracteristiqueById:any = [];
  caracteristique!:Caracteristique;
  genre = false;

  constructor(private activedRoute:ActivatedRoute,private caraterstiqueService:CaracteristiqueServiceService, private router:Router){
    this.caracteristiqueId = activedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.caracteristique = new Caracteristique()
    this.showCaracteristique();
  }

  showCaracteristique(){
    if(this.caracteristiqueId != null){
      this.caraterstiqueService.getCaracteristique(this.caracteristiqueId).subscribe(res => {
        this.caracteristique = res;    
      }); 
    }
  }
  resetForm(){
    this.caracteristique = new Caracteristique();
  }
  submitData(){
    if(this.caracteristiqueId != null){
      this.caracteristique.id = this.caracteristiqueId;
      this.caraterstiqueService.updateCaracteristique(this.caracteristique.id, this.caracteristique).subscribe(res => {
        console.log(res);
      });
    }else{    
      this.caraterstiqueService.addCaracteristique(this.caracteristique).subscribe(res => {
        console.log(res);
      });
    }
    this.router.navigate(['carelec/admin/Caracteristique/']);
   console.log(this.caracteristique);
  }
}
