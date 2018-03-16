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

  it("should test that the AgeOnMars function returns the correct age in MarsYears", function() {
    expect(calc.AgeOnMars(15)).toEqual(7.98);
  });

  it("should test that the AgeOnJupiter function returns the correct age in JupiterYears", function() {
    expect(calc.AgeOnJupiter(15)).toEqual(1.26);
  });

  it("should test that the DateDifference function returns the difference between the two dates in seconds", function() {
    expect(calc.DateDifference(20, "March", 1992, 19, "March", 1992)).toEqual(86400);
  });

  it("should test that the LifeExpectancy function returns the correct remaining years for each planet", function() {
    expect(calc.LifeExpectancy(72, 20, "mercury")).toEqual("You have about " + 216.67 + "Mercury years left!");
    expect(calc.LifeExpectancy(72, 20, "venus")).toEqual("You have about " + 83.87 + "Venus years left!");
    expect(calc.LifeExpectancy(72, 20, "mars")).toEqual("You have about " + 27.66 + "Mars years left!");
    expect(calc.LifeExpectancy(72, 20, "jupiter")).toEqual("You have about " + 4.38 + "Jupiter years left!");
    expect(calc.LifeExpectancy(72, 73, "mercury")).toEqual("You're already over the average Life expectancy! Well done!");
  });
});
