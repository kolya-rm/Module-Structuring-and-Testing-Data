const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* This expression evaluate and assign to num variable random integer value between 1 
 * and 100.
 * First Math.random() returns random float value from 0 to 1. Then expression
 * in parentheses calculate an interval of available integer values started form 0.
 * Multiplying these values gives random float value inside the moved interval. Then
 * Math.floor function returns integer part of random value to which we add interval's
 * start value to obtain result. Because our minimal and maximal values are equals 1 
 * and 100 the value of this expression will lie between these values.
*/