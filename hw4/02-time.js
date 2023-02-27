const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  date1 = new Date(date1);
  date2 = new Date(date2);

  const monthsElapsed =
    (date2.getFullYear() - date1.getFullYear()) * 12 +
    (date2.getMonth() - date1.getMonth());

  years = Math.abs(Math.trunc(monthsElapsed / 12));
  months = Math.abs(monthsElapsed % 12);

  if (Number.isNaN(years) || Number.isNaN(months)) {
    return "Error: Invalid input provided";
  }

  let yearcount = years == 1 ? "1 year" : `${years} years`;
  let monthcount = months == 1 ? "1 month" : `${months} months`;

  if (years == 0 && months == 0) {
    return "No time elapsed";
  } else if (years == 0) {
    return `Time elapsed: ${monthcount}`;
  } else if (months == 0) {
    return `Time elapsed: ${yearcount}`;
  } else {
    return `Time elapsed: ${yearcount}, ${monthcount}`;
  }
};

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
//  Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.

