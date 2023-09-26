import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('myForm') myForm:NgForm;


  defaultCourse="Angular"
//  for radio 
  genders =[
    {id:'1', gender:'Male'},
    {id:'2', gender:'Female'},
  ]

  defaultGender ='Male';//for select option defualt value

  submited:boolean= false;

  //  get form Data
  formData ={
    username:'',
    email:'',
    course:'',
    gender:''
  }

  ngOnInit(): void {
  }
// with out viewchild
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }


// with viewChild

  onSubmit(form:NgForm){
    console.log(this.myForm);
    
  // for data send
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;

    if(this.formData.username  == ''){
      alert("hello");
      return false;
    }

    this.submited=true;
    
   
  }
// for setValue it's work with all value 
  setUsername(){
    this.myForm.setValue({
      userDetail:{
        username:'test',
        email:'t'
      },
      course:'Angular',
      gender:'Male'
    })
  }

// ===============PatchValue it's work with particular value=====
  // setUsername(){
  //   this.myForm.form.patchValue({
  //     userDetail:{
  //       username:'Patch value'
  //     }
  //   })
  // }

}
