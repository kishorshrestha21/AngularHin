import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/throw";

import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
 
url = "https://jsonplaceholder.typicode.com/users"
errorUrl= "https://jsonplaceholder.typicode.com/userss"
// employee=["https://jsonplaceholder.typicode.com/users"]
  constructor(private _http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._http.get(this.url)
   
  }
  
  getErrorMessage(){
    
    return this._http.get(this.errorUrl).pipe(
        // ==== if server  not connect if  write retry(2) 
      // retry again 2 times if 2 written in parameters
      retry(2),
      catchError(this.errorHandle)
    )
  }

  // ===========Error Handling==================================
  errorHandle(error:HttpErrorResponse){
    // =====if only send alert message no need to bind in ts file
    // window.alert(error.message); 
    // =======for show error message on view page======
    return throwError(error.message || "Server Error");
   
  }

  // ==== for parameter route ==========================
 getUser(id:number){
   return this._http.get("https://jsonplaceholder.typicode.com/users/" +id)
   
 }

// getMyUser(id:number){
//   return this.employee.find(e =>e.id === id)
// }


}
