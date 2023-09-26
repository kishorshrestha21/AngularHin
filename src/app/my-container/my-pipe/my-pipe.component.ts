import { Component, OnInit } from '@angular/core';
import { PipeServiceService } from '../appService/pipe-service.service';

@Component({
  selector: 'app-my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent implements OnInit {
  pipeValue:string = "This is test pipe value";
  date = new Date();
  nameSearch:string='';
  nameArr =[
    {
      name:'Mai',
      gender:'female'
    },

    {
      name:'Emily',
      gender:'female'
    },

    {
      name:'Olivia',
      gender:'female'
    },
    {
      name:'Ava',
      gender:'female'
    },
    {
      name:'Abigail',
      gender:'male'
    },
    {
      name:'Madison',
      gender:'Male'
    },
  
  ]

  productArr= [
    {
      sno:1,
      name:"Latop",
      price:"2000",
      availablity:"Available"
    },

    {
      sno:2,
      name:"Mobile",
      price:"1000",
      availablity:"Available"
    },

    {
      sno:3,
      name:"TV Samsung",
      price:"6000",
      availablity:"Available"
    },

    {
      sno:4,
      name:"TV LG",
      price:"5000",
      availablity:" Not Available"
    },

    {
      sno:5,
      name:"Mobile Samsung",
      price:"9000",
      availablity:" Not Available"
    },

    {
      sno:6,
      name:"TV Sony",
      price:"600",
      availablity:" Available"
    },

    {
      sno:7,
      name:"MobileLG",
      price:"8000",
      availablity:" Not Available"
    },

    {
      sno:8,
      name:"Laptop LG",
      price:"1000",
      availablity:"  Available"
    },

    
  ]

// for Column Sum
  studentArray = [
    { id: 1, name:"q", fees: 5000 },
    { id: 2, name:"q", fees: 2000 },
    { id: 3, name:"q", fees: 2000 },
    { id: 4, name:"q", fees: 100}
  ];

// for highlight pipe
users =[
  {
  firstName:"Jhon",
  city:'New York',
  cityCode:'NY'
},

{
  firstName:"James",
  city:'California',
  cityCode:'CA'
},

{
  firstName:"Mark",
  city:'New York',
  cityCode:'NY'
},

]
  myNgClass ={
    'maleClass': true,
    // 'femaleClass' : false
  }

  

  constructor(private _pipeService:PipeServiceService) { }

  // for rowSum
  playersRuns=[];

  // for Age 
  forAges=[];
  ngOnInit(): void {
     this.playersRuns=this._pipeService.playerData;
     this.forAges =  this._pipeService.forAges;
  }

}
