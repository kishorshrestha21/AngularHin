import { Component, OnInit } from '@angular/core';
// for with out form builder =============================
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormBuilder , Validators, FormGroup} from '@angular/forms';
import { forbiddenNameValidator } from '../appValidators/user-name.validator';
import { PasswordValidator } from '../appValidators/confirmPassword.validator';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  // for formBuilder need to inject formBuilder in constructor and import 
  // FormBuilder 
  constructor(private fb:FormBuilder) { }

  registrationForm:FormGroup;

//  For making html code short==========================
  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get phone(){
    return this.registrationForm.get('phone');
  }
  // ========
 

  // =================with out FormBuilder import FormGroup and FormControl ============================
  // registrationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   middleName: new FormControl (''),
  //   lastName: new FormControl (''),
  //   phoneNo: new FormControl (''),
  //   email: new FormControl (''),
  //   uploadPic: new FormControl (''),
  //   uploadId: new FormControl (''),

  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     apartmentNo: new FormControl(''),
  //     city: new FormControl (''),
  //     state: new FormControl (''),
  //     zipcode: new FormControl('')
  //   }),
  //   userName: new FormControl('Kishor'),
  //   password: new FormControl (''),
  //   confirmPassword: new FormControl(''),

  //   eFirstName: new FormControl(''),
  //   eLastName: new FormControl (''),
  //   ePhoneNo: new FormControl (''),
  // });


  loadApidata(){
    this.registrationForm.setValue({
      firstName:'Mick',
      middleName:'Aka',
      lastName:'Jack',
      phoneNo : 7867686863,
      email:'mick@gmail.com',
      uploadPic:'',
      uploadId:'',

      address:{
        street:'9730',
        apartmentNo:18,
        city:'New York',
        state:'NY',
        zipcode:11368
      },
      userName:'Tom',
      password:123,
      confirmPassword:123,

      emergencyContact:{
        eFirstName:'Alisha',
        eLastName:'Soe',
        ePhoneNo:289817265,
      }
    
    })
  }

  patchValue(){
    this.registrationForm.patchValue({
      firstName:'Patch Name'
    })
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName:['', Validators.required],
      middleName:[''],
      lastName:[''],
      phone:[''],
      email:['',[ Validators.required, Validators.email]],
      uploadPic:[''],
      uploadId:[''],
      subscribe:[false],
  
      address: this.fb.group({
        street:[''],
        apartmentNo:[''],
        city:[''],
        state:[''],
        zipcode:[''],
  
        
      }),
  
        // userName:['', [Validators.required, Validators.minLength(3), forbiddenNameValidator ]],
  
        // == with ValidatorFn
        userName:['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/) ]],
        password:[''],
        confirmPassword:[''],
      
        emergencyContact: this.fb.group({
        eFirstName:[''],
        eLastName:[''],
        ePhoneNo:[''],
      }),
        
  
    }, {validator:PasswordValidator});

    // conditional validation ==========================
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue => {
      const phone = this.registrationForm.get('phone');
      if(checkedValue){
        phone.setValidators(Validators.required);
      }
      else{
        phone.clearValidators();
      }

      phone.updateValueAndValidity();

      
    })
  }

}
