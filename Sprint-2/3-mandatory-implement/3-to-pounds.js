// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const paddedPenceNumberString = penceString.substring(0, penceString.length - 1).padStart(3, '0');
  
  return `£${paddedPenceNumberString.substring(0, paddedPenceNumberString.length -2)}.${
    paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, '0')}`;
}

let currentOutput = toPounds("0p");
let targetOutput = '£0.00';
console.assert(currentOutput === targetOutput, 
  `Current output: '${currentOutput}', target output '${targetOutput}'`
)

currentOutput = toPounds("3p");
targetOutput = "£0.03";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("20p");
targetOutput = "£0.20";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("99p");
targetOutput = "£0.99";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("100p");
targetOutput = "£1.00";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("101p");
targetOutput = "£1.01";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("120p");
targetOutput = "£1.20";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("543p");
targetOutput = "£5.43";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("999p");
targetOutput = "£9.99";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("1000p");
targetOutput = "£10.00";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);

currentOutput = toPounds("1001p");
targetOutput = "£10.01";
console.assert(
  currentOutput === targetOutput,
  `Current output: '${currentOutput}', target output '${targetOutput}'`
);