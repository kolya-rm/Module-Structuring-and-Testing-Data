// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//
// We'll get a syntax error with redeclaration of the exist variable. The variable
// decimalNumber is already declared as a parameter of the function, but then we
// try to declare and initialize new constant with the same name. Other problem
// is that we try to use in the console.log() function invocation variable declared
// inside the function and don't accessible from global scope.
//
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
//
// As predicted we got an error 'SyntaxError: Identifier 'decimalNumber' has 
// already been declared'. But solution depends of logic of the function.
//
// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));