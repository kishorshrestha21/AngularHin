import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice',
  templateUrl: './splice.component.html',
  styleUrls: ['./splice.component.css']
})
export class SpliceComponent implements OnInit {

  constructor() { }
  users = [];
  getVal(uname: any){
    this.users.push({
      name: uname.value
    });
    }
  ngOnInit(): void {
  }

}

