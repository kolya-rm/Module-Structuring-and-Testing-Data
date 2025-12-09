// Predict and explain first...
//  =============> write your prediction here
// 
// We'll get syntax error with variable declaration. Function already have 
// the variable str as a parameter. Then we try to declare another variable with
// the same name in the function body.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// 
// capitalise("module structuring and testing data");

// =============> write your explanation here
//
// As predicted we cath error 'SyntaxError: Identifier 'str' has already been declared'
//
// =============> write your new code here

function capitalise(str) {
  let resultStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return resultStr;
}

console.log(capitalise("module structuring and testing data"));


