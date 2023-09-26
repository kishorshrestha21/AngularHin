import { PipeTransform, Pipe } from '@angular/core';
import { stringify } from 'querystring';
@Pipe({
    name: 'customPipe'
})

// made pipe with out  limit
// export class CustomPipe implements PipeTransform{
//     transform(value: any):any {
//        console.log(value)
//     return value + ' kishor...'
//     }

// }

// pipe with limit
// export class CustomPipe implements PipeTransform{
//     transform(value: any, limit:number):any {
    
//         if(value.length > limit){
//             return value.substr(0, limit) + '...'
//         }
//         else{
//             return value;
//         }
//     }


    export class CustomPipe implements PipeTransform{
        transform(value: string, gender:string):string {
            
            if(gender.toLowerCase() == 'male' ){
                return "Mr." + value;
            }
           
            
            else{
                return "Miss." + value;
            } 
            
        }
         
    

}
