import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDots'
})
export class ThreeDotsPipe implements PipeTransform {

  transform(value:any, limit:number): any {
    if(value.length >limit){
      return value.substr(0, limit)+ '...'
    }
    else {
      return value;
    }
  }

}
