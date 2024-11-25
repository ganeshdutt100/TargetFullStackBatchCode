function calculatorBMI(weight, height) {
  let heightCm = height * 100;
  const bmi = weight / Math.pow(heightCm, 2);
  return Math.floor(bmi);
}

let result = calculatorBMI(94, 179.832);

console.log(result);

// 2179 / 7;
sunil;
