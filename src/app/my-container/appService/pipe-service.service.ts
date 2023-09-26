import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipeServiceService {

  playerData= [
    {sno:1, name:'A', fours:20, sixs:7, other:60, dob:new Date("05/10/1988")},
    {sno:1, name:'b', fours:10, sixs:8, other:40, dob:1988-10-20},
    {sno:1, name:'c', fours:12, sixs:7, other:30, dob:20-41994},
    {sno:1, name:'d', fours:20, sixs:8, other:20, dob:20-41988},
  ]

  forAges =[
    {id:1, name:'jhon', city:'New York', salary:40, dob:new Date ("05/10/1989")},
    {id:1, name:'peter', city:'california', salary:1200, dob:new Date ("05/11/1977")},
    {id:1, name:'Mark', city:'New York', salary:1400, dob:new Date ("12/05/1983")},
    {id:1, name:'Emli', city:'Texas', salary:1400, dob:new Date ("05/10/1989")},
    {id:1, name:'Tom', city:'New York', salary:1400, dob:new Date ("04/12/1989")},
  ];

  
  constructor() { }
}
