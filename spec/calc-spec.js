import { Calculator } from './../src/Calculator.js';


describe('Calculator', function() {
  const calc = new Calculator();

  it("should test that the YearsToSeconds function returns the correct amount of seconds", function() {
    expect(calc.YearsToSeconds(1)).toEqual(31536000);
  });

  it("should test that the AgeOnMercury function returns the correct age in years", function() {
    expect(calc.AgeOnMercury(15)).toEqual(62.5);
  });

  it("should test that the AgeOnVenus function returns the correct age in VenusYears", function() {
    expect(calc.AgeOnVenus(15)).toEqual(24.19);
  });
});
