import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, searchTerm:any): any {
    // for show all data before search
  //   if(value.length === 0 ){
  //     return value;
  //   }
   
  //     return value.filter((search)=>{
  //       return search.name.toLowerCase().indexOf(searchTerm) > -1
  //     })
  // }


  transform(value: any, searchTerm:any): any {
    // for show all data before search
    if(!value || !searchTerm){
      return value;
    }
   
      return value.filter((search)=>{
        return search.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         search.price.toLowerCase().includes(searchTerm.toLowerCase())||
         search.availablity.toLowerCase().includes(searchTerm.toLowerCase())
      })
  }

}
