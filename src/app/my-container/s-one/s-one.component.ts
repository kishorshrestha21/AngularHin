import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-s-one',
  templateUrl: './s-one.component.html',
  styleUrls: ['./s-one.component.css']
})
export class SOneComponent implements OnInit {

  constructor(private _messageService:MyServiceService) { }
readMore="";
employees={};
  ngOnInit(): void {
    this.readMore =this._messageService.readMore;
    this.employees =this._messageService.employees;
    
  }

  btnClick(){
    this._messageService.messageAlert();

  }
}
