import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from 'src/app/_core/model/Marque.model';
import { MarqueServiceService } from 'src/app/_core/services/marque-service.service';

@Component({
  selector: 'app-edit-marque',
  templateUrl: './edit-marque.component.html',
  styleUrls: ['./edit-marque.component.css']
})
export class EditMarqueComponent implements OnInit{
  marqueId!:number;
  marque!:Marque|any;


  constructor(private service:MarqueServiceService,private router:Router,private activatedRoute:ActivatedRoute){
    this.marqueId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.marque = new Marque();
    this.editMarque();
  }

  editMarque(){
    if(this.marqueId != null){
      this.service.getMarque(this.marqueId).subscribe(res => {
        this.marque = res;
      });
    }
  }

  addMarque(){
    if(this.marque != null){
            
      this.service.createMarque(this.marque).subscribe(res =>{
        console.log(res);
      });

      this.router.navigate(["/carelec/admin/Marque"]);
    }
  }

  updateMarque(){
    if(this.marque != null){
      this.service.updateMarque(this.marque.id,this.marque).subscribe(res =>{
        console.log(res);
      });

      this.router.navigate(["/carelec/admin/Marque"]);
    }
  }

  
}
