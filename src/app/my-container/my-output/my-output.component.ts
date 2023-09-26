import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-output',
  templateUrl: './my-output.component.html',
  styleUrls: ['./my-output.component.css']
})
export class MyOutputComponent implements OnInit {

  adminInputVals= [];
  userInputVals = [];

  adminsCount:number=0;
  userCount:number=0;

  jptData:any;

  ngOnInit(): void {
  }
 getAdminValue(myVal){
   this.adminInputVals.push(myVal);
 }


 getUserValue(myVal){
   this.userInputVals.push(myVal);
 }

 onDeleteAdmin(i){
   if(window.confirm("Are You Sure ..."))
   this.adminInputVals.splice(i,1)
   this.adminsCount = this.adminsCount -1;
 }

 onDeleteUser(i){
   if(window.confirm("Are You Sure ...")){
    this.userInputVals.splice(i,1)
    this.userCount = this.userCount -1;
   }
  
}

 
// ======================

getAdminCount(myNewCount){
  this.adminsCount = myNewCount;
}

getUserCount(myNewCount){
  this.userCount = myNewCount;
}


}
