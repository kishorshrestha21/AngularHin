import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
// @Input()pValue:string="pValue"


@Input()productSlelected:boolean;
@Input()selectedProduct:string="";
@Output()addedProduct:any = new EventEmitter<any>();

onAddProduct(){
  this.addedProduct.emit(this.selectedProduct);
}
  constructor() { }

  ngOnInit(): void {
  }

}
