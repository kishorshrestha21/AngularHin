import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowSum'
})
export class RowSumPipe implements PipeTransform {

  transform(other: any, arg1:any, arg2:any): any {
    let sum:number = other+4*arg1+6*arg2;
    return sum;
  }

}
