import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  testInterpolation:string ="Interpolation"
  testText:boolean =true;
  text1:string ="text1"
  text2:string ="text2"
  isAble:boolean=true;
  testTwoWay:any="";
  tempValue="";
  inputValue:string="";
  pad:string="10px";
  back:boolean = true;
  yellow1:string = "pink";
  red1:string ="red";
  myback:boolean=true;
  myTurquoise:string ="turquoise";
  myTomato:string ="tomato";
  btnValue="Click button";
  showNHide:boolean = true;
  showHide:string ="Hide"
  ifTrue:boolean = true;

  myNgSwitch:string='';
  mySelectValue="";
  myNames = [];

  employees =[
  {name:"Ram", lName:"Thapa", address:"Queens", photo:'assets/image/mobile.jpg'},
  {name:"Shyam", lName:"Sunder", address:"Woodside", photo:'assets/image/mobile.jpg'},
  {name:"Hari", lName:"Maharjan", address:"Queens", photo:'assets/image/mobile.jpg'},
  ]

testClass={
  'tClass1': true,
  'tClass2': true,
  'tClass3': false,
}

testStyle ={
  'background': 'red',
  'padding': '10px',
  'border-radius':'5px'
}

// =========Property Binding==============
  onTem(testTem:any){
    this.tempValue = testTem.value;
    
  }
 // ========================================
  onMyClick(){
this.myback = false;

  }

  onMyToggle(){
    this.myback =!this.myback;
  }

  onGetValue(event:any){
    this.btnValue = event.target.value;
  }
  onGetValue2(event:any){
    this.btnValue = event.target.value;
  }

  onshowHide(){
  this.showNHide = !this.showNHide;
  if(this.showHide == "Hide"){
    this.showHide = "Show";

  }
  else{
    this.showHide ="Hide";
  }
  }

  onChangeBlock(){
    this.ifTrue =!this.ifTrue;
  }

  onGetSelectValue(eve:any){
    this.mySelectValue = eve.target.value;
    this.myNgSwitch = eve.target.value;
  }

  onCrerateName(myUName:any){
    this.myNames.push({
     name:myUName.value
    })
  }

  onDelete(item:any){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.myNames.splice(item, 1)
     }
  
    
  }

  onDeleteTop(){
    this.myNames.splice(this.myNames.length -1)
  }

  ngOnInit(): void {
  }

}
