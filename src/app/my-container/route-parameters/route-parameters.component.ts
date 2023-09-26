import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrls: ['./route-parameters.component.css']
})
export class RouteParametersComponent implements OnInit {

  constructor(private router : Router) { }
  departments=[
    {id:1, name:"Angular"},
    {id:2, name:"JavaScript"},
    {id:3, name:"Jquery"},
    {id:4, name:"Bootstrap"},
    {id:5, name:"Html"}
  ]
  ngOnInit(): void {

 
    

  }

  onSlect(department){
      this.router.navigate(['/departments', department.id]);
      console.log(this.departments.length)
  }
 

}
