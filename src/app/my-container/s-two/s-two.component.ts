import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-s-two',
  templateUrl: './s-two.component.html',
  styleUrls: ['./s-two.component.css']
})
export class STwoComponent implements OnInit {

  constructor(private _messageService:MyServiceService) { }
  readMore="";
  employees={};
  ngOnInit(): void {
    this.readMore =this._messageService.readMore;
    this.employees = this._messageService.employees;
  }

  btnClick(){
    this._messageService.messageAlert();
    // alert("hhh")
  }
}
