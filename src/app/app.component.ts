import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'angular hin';
  isDisable:boolean=true;
  isHide:boolean =false;
  twoway="";

  able(){
    this.isDisable = false;
    this.isHide =!this.isHide;
  }
}
