import { AbstractControl, ValidatorFn } from "@angular/forms";
//  this for one validate===============
// export function forbiddenNameValidator(control: AbstractControl):{[key:string]:any} | null{
//     const forbidden =/admin/.test(control.value);
//     return forbidden ? {'forbiddenName': {value:control.value}}:null;
// }


// whit factory function  work with multiple validation 
export function forbiddenNameValidator(forbiddenName:RegExp): ValidatorFn {
   return (control: AbstractControl):{[key:string]:any} | null =>{
        const forbidden =forbiddenName.test(control.value);
         return forbidden ? {'forbiddenName': {value:control.value}}:null;
}

 }