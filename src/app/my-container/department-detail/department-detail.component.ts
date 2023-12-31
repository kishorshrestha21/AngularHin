import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  departmentId:any;
  depLength = "";
 
  constructor( private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // ===========this is for with out previous and next button ==============
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId =id;

    // ===========
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;

     
    });

     
    
  }

  goPrevious(){
    if(this.departmentId > 1){
      let previousId = this.departmentId -1;
      this.router.navigate(['/departments', previousId]);
    }
    else{
      alert("Can not go previous less than 1.")
    }
   
   
  }

  goNext(){
    if(this.departmentId < 5){
      let nextId = this.departmentId +1;
      this.router.navigate(['/departments', nextId])
    }
    else{
      this.departmentId = 1;
    }
   
  
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}])
  }



}
