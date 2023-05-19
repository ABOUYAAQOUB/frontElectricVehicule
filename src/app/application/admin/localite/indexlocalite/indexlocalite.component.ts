import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Localite } from 'src/app/_core/model/Localite.model';
import { LocaliteServiceService } from 'src/app/_core/services/localite-service.service';

@Component({
  selector: 'app-indexlocalite',
  templateUrl: './indexlocalite.component.html',
  styleUrls: ['./indexlocalite.component.css']
})
export class IndexlocaliteComponent implements OnInit {

  localites : Localite[] | any;
  constructor(private localiteServiceService : LocaliteServiceService,private router : Router){}

  ngOnInit(): void {
    this.localiteServiceService.getLocalites().subscribe(res => {
    this.localites = res;
    });
  }
  deleteLocalite(id:number){
    this.localiteServiceService.deleteLocalite(id).subscribe(res =>{
      //console.log(res);
      this.localiteServiceService.getLocalites().subscribe(res =>{
        this.localites = res;
      });
    });
  }

}
