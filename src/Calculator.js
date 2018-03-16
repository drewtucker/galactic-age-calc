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

  AgeOnVenus(age)
  {
    return Math.round( (age / 0.62) * 100) / 100;
  }
}
