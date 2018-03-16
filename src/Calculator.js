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

  AgeOnMars(age)
  {
    return Math.round( (age / 1.88) * 100) / 100;
  }

  AgeOnJupiter(age)
  {
    return Math.round( (age / 11.86) * 100) / 100;
  }

  DateDifference(day1, month1, year1, day2, month2, year2)
  {
      let firstDate = new Date(`${day1}-${month1}-${year1}`);
      let secondDate = new Date(`${day2}-${month2}-${year2}`);
      return (Date.parse(firstDate) - Date.parse(secondDate)) / 1000;

  }

}
