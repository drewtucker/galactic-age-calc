import { Calculator } from './../src/Calculator.js';


describe('Calculator', function() {
  const calc = new Calculator();

  it("should test that the YearsToSeconds function returns the correct amount of seconds", function() {
    expect(calc.YearsToSeconds(1)).toEqual(31536000);
  });
});
