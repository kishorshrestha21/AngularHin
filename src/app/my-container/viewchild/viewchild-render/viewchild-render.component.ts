import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ViewChildRenderChildComponent } from './view-child-render-child/view-child-render-child.component';

@Component({
  selector: 'app-viewchild-render',
  templateUrl: './viewchild-render.component.html',
  styleUrls: ['./viewchild-render.component.css']
})
export class ViewchildRenderComponent implements OnInit,AfterViewInit {

  titleRender:string="Render"
  @ViewChild('box1') box1:ElementRef;

  @ViewChild(ViewChildRenderChildComponent) renderChild:ViewChildRenderChildComponent;
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.box1.nativeElement, 'backgroundColor', 'green')
    this.renderer.setStyle(this.box1.nativeElement, 'color', 'white')
    this.renderer.addClass(this.box1.nativeElement, 'myClass')
    this.renderer.setAttribute(this.box1.nativeElement, 'title','rentertitle')
  }

  changeChildProperty(){
    this.renderChild.myChildTitle = "test";
  }

  changeChildMethod(){
    this.renderChild.clickMeAgain()
  }
}
