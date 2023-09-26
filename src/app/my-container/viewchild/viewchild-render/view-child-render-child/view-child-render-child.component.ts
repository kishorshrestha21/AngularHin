import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, Renderer2, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from 'src/app/my-container/appDirective/test-directive.directive';

@Component({
  selector: 'app-view-child-render-child',
  templateUrl: './view-child-render-child.component.html',
  styleUrls: ['./view-child-render-child.component.css']
})
export class ViewChildRenderChildComponent implements OnInit, AfterContentInit {
  myChildTitle:string="Render Child";

  @ContentChild('childCon') childparagraph:ElementRef;
  constructor(private renderer:Renderer2) { }
 
  @ViewChild(TestDirectiveDirective) myDir:TestDirectiveDirective;
  ngOnInit(): void {

  }

  ngAfterContentInit(){
  this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red')
  }

  clickMeAgain(){
    var text = this.renderer.createText('This text is created by render')
    this.renderer.appendChild(this.childparagraph.nativeElement, text)
  }

  changeColor( color:string){
    this.myDir.changeBg(color);
  }

}
