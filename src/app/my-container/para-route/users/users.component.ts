import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:any
 private _id:number;

// id:number;
  constructor(private _route:ActivatedRoute, 
            private _userServeice:UserDataService,
            private _router: Router) { }

  ngOnInit(): void {
    // ==========with snapshot========================================
    // let id =this._route.snapshot.params['id'];
    // this._userServeice.getUser(id).subscribe(u => {
    //   this.user = u;
    //   console.log(u);
    // });
    
 

    // ===============OR=====================================
    let id =parseInt( this._route.snapshot.paramMap.get('id'));
    this._userServeice.getUser(id).subscribe(u => this.user = u);

    // ===========with paraMap  need to decaler proerty (id:number) ===== 
    // but no need to make method in service========
    // this._route.paramMap.subscribe(params =>{
    //   this._id = +params.get('id');
    //     this.user = this._userServeice.getUser(this._id)
    // });
  }

  goPrevious(){
    let previousId = this._id +1;
    this._router.navigate(['/user', previousId]);

    console.log(this._id);
  }

}
