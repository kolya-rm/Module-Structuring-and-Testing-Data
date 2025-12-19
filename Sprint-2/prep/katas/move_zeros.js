function moveZeros(array) {
  let nonZerosArray = [];
  let zerosArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zerosArray.push(array[i]);
    } else {
      nonZerosArray.push(array[i]);
    }
  }
  return [...nonZerosArray, ...zerosArray];
}

// Requirement: Moves zeros to the end
console.assert(
    (moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) === ([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]),
    "Failed: Should move zeros to end while keeping order"
);

// Requirement: Does nothing if no zeros
console.assert(
    (moveZeros([1, 2, 3])) === ([1, 2, 3]),
    "Failed: Should not change array with no zeros"
);

// Requirement: Handles all zeros
console.assert(
    (moveZeros([0, 0, 0])) === ([0, 0, 0]),
    "Failed: Should handle array of all zeros"
);

// Requirement: Handles mixed types (false is not 0)
console.assert(
    (moveZeros([false, 1, 0, 1, 2, 0, "a"])) === ([false, 1, 1, 2, "a", 0, 0]),
    "Failed: Should treat 'false' or strings differently than the number 0"
);

module.exports = moveZeros;