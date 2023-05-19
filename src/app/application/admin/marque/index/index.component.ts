import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from 'src/app/_core/model/Marque.model';
import { MarqueServiceService } from 'src/app/_core/services/marque-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  
  marques!:Marque []|any;
  constructor(private service:MarqueServiceService,private router:Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  ngOnInit(): void {
    this.service.getMarques().subscribe(res =>{
      this.marques = res;
    });
    console.log("ok ok");
  }

  deleteMarque(id:number){
    if(id != null){      
      this.service.deleteMarque(id).subscribe(res => {
        console.log(res);

        
      });
      location.reload();
      //this.router.navigate(["/carelec/admin/Marque"]);
      
    }
  }


}
