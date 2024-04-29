import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private logSerivce: LogService) {
    this.login();
   }
  
  login() {
    this.logSerivce.log("login Successfull");
  }


}
