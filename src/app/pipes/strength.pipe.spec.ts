import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;
  beforeEach(() => {
    pipe = new StrengthPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it("should return weak for value 9", () => {
    expect(pipe.transform(9)).toEqual("9 Weak");
  })
  it("should return strong for value 12", () => {
    expect(pipe.transform(12)).toEqual("12 Strong");
  })
  it("should return strongest for value 22", () => {
    expect(pipe.transform(22)).toEqual("22 Strongest");
  })
 
});
