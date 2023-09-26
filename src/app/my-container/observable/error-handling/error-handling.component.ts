import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../para-route/user-data.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  myUsers:any=[];
  errorMsg:any;
  constructor(private _userData:UserDataService) { }


  ngOnInit(): void {
    this._userData. getErrorMessage()
    .subscribe(data => this.myUsers = data,
      error => this.errorMsg = error)
    
  }
  


}

