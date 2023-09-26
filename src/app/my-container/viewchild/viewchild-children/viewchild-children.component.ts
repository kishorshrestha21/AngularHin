import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-children',
  templateUrl: './viewchild-children.component.html',
  styleUrls: ['./viewchild-children.component.css']
})
export class ViewchildChildrenComponent implements OnInit {
myTitle:string="My Title"
  constructor() { }

  clickMe(){
alert(this.myTitle);
  }
  ngOnInit(): void {
  }

}
