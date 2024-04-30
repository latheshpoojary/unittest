import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the empty message ', () => {
    // act 
    let count = service.message.length;


    // assert
    expect(count).toBeFalsy();
  })

  it('should have lenght of 1 on log method called ', () => {
    // act
    service.log("MESSAGE");


    //asset
    expect(service.message.length).toBe(1);
  
  })


  it('should clear the message array', ()=>{
    // arrange
    service.log('message');

    // act
    service.clear();

    // asset
    expect(service.message.length).toBe(0);


  })
});
