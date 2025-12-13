// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// In this case we get ReferenceError: Cannot access 'cityOfBirth' before initialization.
// We initialize the variable cityOfBirth after we use it in the consol.log() function
// argument.