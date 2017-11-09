import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isDesc: boolean = false;
  column: string = 'name';
  direction: number;
  constructor(private appService:AppService){

  }
  details=[];
  ngOnInit(){
  	this.appService.getData().subscribe(responseData => this.details=responseData);
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
}
