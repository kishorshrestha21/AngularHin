import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: any, cityCode: string): any{
    if(cityCode === 'NY'){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:red">' + cityCode +'</div>');
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:green">' + cityCode +'</div>');
    }
    
  }

}
