const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 
//  2. const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
// ); : initialize a string variable with value "399" which we get by evaluating 
// substring from the begin to finish - 1 position substring of the string stored
// in the penceString variable.
//
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// initializes a string variable with value 399. The function padStart appends
// given string with given symbol until we get string with given length.
//
// 4. const pounds = paddedPenceNumberString.substring(
//  0,
//  paddedPenceNumberString.length - 2
// ) : initializes a string variable pounds with the value "3". By returning
// from paddedPenceNumberString substring from string length-2 position to the
// end of string.
//
// 5. const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0"): initialize pence variable with the value 99. By returning
// from paddedPenceNumberSting substring of 2 last symbols and append with "0"
// to length of 2 symbols.
//
// 6. console.log(`£${pounds}.${pence}`): output in console string "£3.99".
// In the interpolated string passed as an argument in the function console.log()
// the variables are replaced their values.
