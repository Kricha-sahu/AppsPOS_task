import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reults',
  templateUrl: './reults.component.html',
  styleUrls: ['./reults.component.css']
})
export class ReultsComponent implements OnInit {
  selectedItems:string[] = [];

  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.queryParams.subscribe(params =>{
      if(params['selected']){
        this.selectedItems =params['selected'];
      }
    })
  }


}
