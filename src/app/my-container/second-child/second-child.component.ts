import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

 @Input() childData:string;
 @Input() secondChildData:string;
@Output() childEvent = new EventEmitter();
@Output() secondDataEevent = new EventEmitter();
 outputString:string="I am a second data from child component"
fireEvent(){
  this.childEvent.emit ("I am data from child component")
}

SecondFireEvent(){
  this.secondDataEevent.emit (this.outputString);
}

  constructor() { }

  ngOnInit(): void {
  }

}
