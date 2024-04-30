import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {


  message:string[] = [];
  constructor() { 
    
  }

  log(msg: string) {
    this.message.push(msg);
  }

  clear() {
    this.message = [];
  }
}
