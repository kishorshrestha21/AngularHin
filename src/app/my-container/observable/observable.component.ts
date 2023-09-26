import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private _myService:MyServiceService) { }
 users=[];
  ngOnInit(): void {
    this._myService.users().subscribe
    (usersData => this.users = usersData)
  }

}

