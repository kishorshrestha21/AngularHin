import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-para-route',
  templateUrl: './para-route.component.html',
  styleUrls: ['./para-route.component.css']
})
export class ParaRouteComponent implements OnInit {

  users=[];
  constructor(private _userData:UserDataService, private _router:Router) { }
// ======witht naigate ===========================================
  onSelect(users:any){
    this._router.navigate(['/user', users.id])
  }
// ============================================================
  ngOnInit(): void {
    this._userData.getAllUsers().subscribe((myUsers) => {
      this.users = myUsers
    });
    

  }

}

