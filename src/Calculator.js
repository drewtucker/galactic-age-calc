export class Calculator
{

  YearsToSeconds(age)
  {
    return age * 365 * 24 * 60 * 60;
  }

  AgeOnMercury(age)
  {
    return Math.round( (age / 0.24) * 100) / 100;
  }
}
