let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 2 function replaceAll() calls in lines 4 and 5. If we consider constructors
// to be function there are 4 calls.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// There is error in line 5. Is missed "," between arguments in replaceAll() function
// call.

// c) Identify all the lines that are variable reassignment statements
// Variables carPrice and priceAfterOneYear are reassigned in lines 4 and 5.

// d) Identify all the lines that are variable declarations
// Variables are declared in lines 1, 2, 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression returns numeric representation of string saved in carPrice variable.
// First, function replaceAll replace all "," symbols with empty string. Then Number()
// constructor convert result string in number.