import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  kiran:boolean= true;
  testText:string="My Test Text";
  interpolation:string="I am an Interpolation.";
  status1:string ="Online";
  status2:string ="Offline";
  myStatu:boolean=true;
  isdisable:boolean =true;
  mar:string ="15px";
  isActive:boolean = true;
  myBack1:string = "pink";
  hideShow:boolean = true;
  hideNShow:string = "Hide"
  message:string ="";
  inputValue:string= "";
  name:any="";
  
 

  myNgClass ={
    'one': true,
    'two' : false,
    'three' : false
  }

  multiStyle ={
    'background':'red',
    'padding':'10px',
    'margin-top':'10px'
  }

  //===Boottrap====
  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  myMethod(){
    return "I live in New York ";
  }

  

  onClick(){
    this.myNgClass ={
      'one': false,
      'two' : true,
      'three' : true
    }
  }

  tog(){
    this.hideShow =!this.hideShow;

    if(this.hideShow){
      this.hideNShow = "Hide";
    }
    else{
      this.hideNShow = "Show";
    }
  }

  addCart(event:any){
    this.message = event.target.value + " Added in cart.";
  }
// template refreance veriable
  getInputValue(myVal:any){
    this.inputValue= myVal.value;
  }



  // =================Test===========================
  gender:boolean=true;
  boy:string="I am a boy";
  girl:string ="I am a girl";
  buttonVal:string="";
  twoWayB="";
  templateValue:string="";
  myGender:string="Girl";
  multiClasses ={
    'cOne' : true,
    'cTwo' : false
  }

  multiStyles={
    'background':'#999',
    'padding':'10px'
  }
onGender(){
  this.gender= !this.gender;
  if(this.myGender == "Girl"){
    this.myGender ="Boy";
  }

  else{
    this.myGender="Girl";
  }
}

getVal(event:any){
  this.buttonVal = event.target.value;
}

getTemVal(tem:any){
  this.templateValue = tem.value
  
}
  //============================================ 


}
