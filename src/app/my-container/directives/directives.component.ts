import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  ngOnInit(): void {
  
  }

  isShow:boolean=true;
  hideShow:string ="Hide";
  ifBlock:boolean = false;
  showMe:boolean = false;

  dekha:boolean =true;
  block:string = "Show eBlock"


  constructor() { }



  showNhide(){
    this.isShow =!this.isShow;
    if(this.hideShow == "Hide"){
      this.hideShow = "Show";
    }

    else{
      this.hideShow = "Hide";
    }
  }
 blockName(){
   this.dekha = !this.dekha;
   if(this.block =="Show eBlock"){
     this.block ="Show iBlock";
   }
   else{
    this.block ="Show eBlock";
   }
 }

//  -----------------Test================
 isTrue:boolean=true;
 withThen:boolean=false;
 ifB:boolean=true;

 color:string ='red';  

 choose:any=" ";
 myName:string='ram';

 myProduct=" ";
 imageSrc = 'assets/image/mobile.jpg' 
  getValue(drp:any){
    this.choose = drp.target.value;
  }

  getProduceVal(pVal:any){
    this.myProduct = pVal.target.value;
  }

  products =[
    {id:"p021",  name:"Mobile",img: this.imageSrc, price:900},
    {id:"p0201",  name:"TV",  img:'assets/image/mobile.jpg', price:600},
    {id:"p0219",  name:"Laptop", img:"", price:1900},
    {id:"p0121",  name:"Washing Machine" ,img:"", price:500},
  ]

  users =[];
  test:string ="test1"
  temVal ="";
  onUserCreateUser(uname:any){
    this.users.push({
      name:uname.value,
    
    });

  }
  
names =[];
  createName(myname:any){
    this.names.push({
      tname:myname.value
    });
   }

  onRemove(){
    this.users.splice(this.users.length -1)
  }
  onRemoveUser(item){
    this.users.splice(item, 1)
  }

  onTemTest(temTest){
    this.temVal = temTest.value;
  }
}


