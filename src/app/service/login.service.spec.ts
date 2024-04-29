import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LogService } from './log.service';

describe('LoginService', () => {
  let loginservice: LoginService;
  let loggerService: LogService;
  beforeEach(() => {
   loggerService = jasmine.createSpyObj('LogService',['log']);
    loginservice = new LoginService(loggerService);
  });


  it("should call the log method on successfull login", () => {
    expect(loggerService.log).toHaveBeenCalledWith("login Successfull");
  })

 
});
