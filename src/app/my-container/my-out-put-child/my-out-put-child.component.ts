import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-my-out-put-child',
  templateUrl: './my-out-put-child.component.html',
  styleUrls: ['./my-out-put-child.component.css']
})
export class MyOutPutChildComponent implements OnInit {
  
  @Input() textHead:string;
  @Input() placeHolderText:string;
  @Input() headerColor:any;

  @Output() getVal = new EventEmitter();

  @Input()dataCount:number;

  // ========Data Count========
  @Output()newCount = new EventEmitter();
  ngOnInit(): void {}

  onSendData(inputVal){
    if(inputVal.value.length > 0){
      this.getVal.emit(inputVal.value);
      this.dataCount= this.dataCount +1;
      this.newCount.emit(this.dataCount);
      inputVal.value ="";
    }

    else{
      alert("Please fill out the form")
    }
   
  }

}

