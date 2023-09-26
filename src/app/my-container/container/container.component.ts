import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  cars=[
    {name:"Toyota"},
    {name:"Honda"},
    {name:"BMW"}
  ]

  num:number = 0;
  momo:number = 5;
  addNum:number = 0;

  numPlus(){
    // if(this.num >= 0) {
      this.num = this.num +1
      // this.momo = 5* this.num
      this.addNum = this.num * this.momo;
    // }
  }

  numMinus(){
    if(this.num>0){
      this.num = this.num-1
      // this.momo = 5 * this.num
      this.addNum = this.num * this.momo;
    }
  }



  constructor() { }


  ngOnInit(): void {
  }

}
