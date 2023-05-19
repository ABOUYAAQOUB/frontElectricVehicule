import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Localite } from 'src/app/_core/model/Localite.model';
import { LocaliteServiceService } from 'src/app/_core/services/localite-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-addlocalite',
  templateUrl: './addlocalite.component.html',
  styleUrls: ['./addlocalite.component.css']
})
export class AddlocaliteComponent implements OnInit{
  localiteId:number|null;
  localiteById:any = [];
  localite!:Localite;
  genre = false;
  constructor(private activatedRoute:ActivatedRoute,private localiteservice:LocaliteServiceService,private router:Router){
    this.localiteId = activatedRoute.snapshot.params['id'];}

ngOnInit(): void {
  this.localite= new Localite()
  this.showLocalite();  
}

showLocalite(){
  if(this.localiteId != null){
    this.localiteservice.getLocalite(this.localiteId).subscribe(res => {  
      this.localite = res;    
    }); 
  }
}
resetForm() {
  this.localite = new Localite();
}
submitData(){
  if(this.localiteId != null){
    this.localite.id = this.localiteId;
    this.localiteservice.updateLocalite(this.localite.id, this.localite).subscribe(res => {
      console.log(res);
    });
  }else{    
    this.localiteservice.addLocalite(this.localite).subscribe(res => {
      console.log(res);
    });
  }
  this.router.navigate(['carelec/admin/Localite/']);
 console.log(this.localite);
}
}