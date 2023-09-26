import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // myValName:string= "Ram"
  // valFormParent:string ="From Parent"
  proSlelected:boolean=false;
  selectedPro:string="";

  onSelectProduct(productName:any){
    this.proSlelected=true;
    this.selectedPro = productName;
  }

  addedProduct:any;
  onAddedProduct(proData){
    this.addedProduct =proData;
  }
  constructor() { }


  ngOnInit(): void {
  }

}
