
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//
// We have function declaration errors:
// 1. Instead of a parameter there is an numeric value in the function signature
// 2. We try to use undeclared variable num in the body of the function.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//
// SyntaxError: Unexpected number
//
// =============> explain this error message here
//
// As predicted error is a numeric literal instead of the function parameter.
//
// Finally, correct the code to fix the problem
//
// We need to change the number 3 with name of variable is used in function
//
// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));