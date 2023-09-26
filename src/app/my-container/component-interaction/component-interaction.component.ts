import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  // for send data--------------------------------------
  dataFromParent:string="I am data from Parent";
  seconDataFromChild:string="I am a second data form Parent"
  // for get dat ------------
 message="";
 secondMessage="";

 getData(value:any){
  this.secondMessage = value;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
