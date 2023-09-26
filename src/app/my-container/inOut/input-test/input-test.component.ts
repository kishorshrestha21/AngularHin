import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {
 sendText="i am an input text";
  constructor() { }

  ngOnInit(): void {
  }

}
