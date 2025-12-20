function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// In the begin of function after the declaration the index variable initialize with value 0.
// Then in the end of the every iteration of the while loop it increased by 1.

// b) What is the if statement used to check
// The if statement checks the value of the index variable exceeds the string last character iindex.

// c) Why is index++ being used?
// Because we the while loop without a counter instead of a for loop with the known count of iteration.

// d) What is the condition index < str.length used for?
// This condition indicate reaching of the end of the given string and exiting from the while loop.
