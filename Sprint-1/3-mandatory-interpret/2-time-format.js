const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// If we consider constants to be variables there are 6 variable declarations in lines
// 1, 3, 4, 6, 7, 9.

// b) How many function calls are there?
// There is the only one function call in line 10 console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This expression evaluate movieLength variable value's reminder from division by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression evaluate movie length in minutes. First we subtract number of seconds
// less than full minute count and then convert the rest of seconds in minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Result variable represents movie length in string ch contains count of hours, minutes
// and seconds splitted by ":" symbol.
// Would be better change movieLength the variable name to movieLengthInSecond and result
// to movieLength, movieLengthString or movieLengthHMS.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work only for number value of the variable movieLength. And in depending
// of format of the result string some values will return incorrect result. For example
// if we consider the result string format should be hh:mm:ss some input values can result
// with 1 digit for hours, minutes, second or more than 2 digits for hours.
