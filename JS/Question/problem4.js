function lifeWeeks(age) {
  let yearRemaining = 90 - age;
  let days = yearRemaining * 365;
  let Weeks = yearRemaining * 52;
  let Months = yearRemaining * 12;
  console.log(
    "You have " +
      days +
      " days , " +
      Weeks +
      " weeks, and " +
      Months +
      " months left "
  );
}
lifeWeeks(12);
