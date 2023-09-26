import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewchildChildrenComponent } from './viewchild-children/viewchild-children.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {
title:string="Viewchild"
  constructor() { }
  @ViewChild('box') box:ElementRef;

  @ViewChild(ViewchildChildrenComponent) child:ViewchildChildrenComponent;
  ngOnInit(): void {
    
  }
  // We use ngAfterViewInit because viewchild execute after all DOM loaded
  // so viewchild does not  execute before DOM load and not show the error. 
  ngAfterViewInit(){
    console.log(this.child)
    // this.box.nativeElement.style.backgroundColor="blue";
    // this.box.nativeElement.classList="addClass";
    // this.box.nativeElement.innerHTML =" Modify with innerHTML";

  }

  changeChildProperty(){
 this.child.myTitle = "Title change form parent";
  }

  changeChildMethod(){
    this.child.clickMe()
  }

}
