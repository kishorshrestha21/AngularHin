import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnSum'
})
export class ColumnSumPipe implements PipeTransform {

  transform(value: any, attr:string): any {
    return  value.reduce((a,b) => a+b [attr],0);
  }
 
}
