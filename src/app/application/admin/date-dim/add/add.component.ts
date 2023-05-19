import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateDim } from 'src/app/_core/model/DateDim.model';
import { DatedimServiceService } from 'src/app/_core/services/datedim-service.service';
import { from } from 'rxjs';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  dateId:number|null;
  dateById:any = [];
  date!: DateDim;
  genre = false;
  constructor(private activatedRoute:ActivatedRoute,private dateservice:DatedimServiceService,private router:Router){
    this.dateId = activatedRoute.snapshot.params['id'];}

ngOnInit(): void {
  this.date= new DateDim()
  this.showLocalite();  
}

showLocalite(){
  if(this.dateId != null){
    this.dateservice.getDate(this.dateId).subscribe(res => {  
      this.date = res;    
    }); 
  }
}
resetForm() {
  this.date = new DateDim();
}

submitData(){
  if(this.dateId != null){
    this.date.id = this.dateId;
    this.dateservice.updateDate(this.date.id, this.date).subscribe(res => {
      console.log(res);
    });
  }else{    
    this.dateservice.addDate(this.date).subscribe(res => {
      console.log(res);
    });
  }
  this.router.navigate(['carelec/admin/DateDim/']);
 console.log(this.date);
}
}