import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-sub-two',
  templateUrl: './sub-two.component.html',
  styleUrls: ['./sub-two.component.css']
})
export class SubTwoComponent implements OnInit {
  // this is for subject if we use subject 
  // we have to declear property value
// userName:string = "Kishor"

// this is for BahaviourService in BahaviourService
// we dont need to declear property value
userName:string;
  constructor(private _designServices:DesignUtilityService) { 
    this._designServices.userName.subscribe(uname => {
      this.userName =uname})
  
    }

    updateUserName(uname){
      this._designServices.userName.next(uname.value)
  
    }

  ngOnInit(): void {
  }

}
