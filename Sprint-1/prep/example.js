const result = console.log("hello there!");

const decimalNumber = 0.5;
const percentage = `${decimalNumber * 100}%`;
console.log(percentage);

const height = 10;
const width = 30;
const area = height * width;
const perimeter = (height + width) * 2;
console.log(`S=${area} p=${perimeter}`);

const priceInPennies = 1231;
const price = `${Math.round(priceInPennies / 100)}&${ priceInPennies % 100}`;
console.log(`price=${price}`);

function convertToPercentage() {
  return `${decimalNumber * 100}%`;
}
const result1 = convertToPercentage(0.5);
console.log(result1);

const output1 = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);

console.log(output1);
console.log(output2);

function convertToPercentageWithParameter(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentageWithParameter(0.5));
console.log(convertToPercentageWithParameter(0.231));