// Predict and explain first...
//  =============> write your prediction here

// As the result of function's work we'll get undefined value. So th code running
// result will look like:
// The sum of 10 and 32 is undefined

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// It happens because function's return statement stands before summing expression
// and return as function's work result undefined value.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);