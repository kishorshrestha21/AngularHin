import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http:HttpClient) { }

  messageAlert(){
    alert("Thanks for Subcribe. We will get in touch with you shortly")
  }
  employees=[
    {name:"sam", age:20, address:"New York"},
    {name:"Shyam", age:22, address:"New York"},
    {name:"Hari", age:23, address:"New York"}
  ]

  readMore="Read More ..."

  url="https://jsonplaceholder.typicode.com/users"
  users():Observable<any>{
    return this._http.get(this.url)
  }

}
