import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  propertiesJson$ = new EventEmitter<string>(); 

  constructor() { }
}
