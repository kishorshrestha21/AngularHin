import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.css']
})
export class OutputTestComponent implements OnInit {

  @Input()inputText:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
