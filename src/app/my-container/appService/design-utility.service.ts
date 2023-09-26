import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  // this is for subject
// userName = new Subject<any>()

// this is for behaviourService
userName = new BehaviorSubject('Kishor');
  constructor() { }
}
