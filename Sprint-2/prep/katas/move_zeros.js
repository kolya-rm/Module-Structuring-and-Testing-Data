function moveZeros(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      result += array[i];
    }
  }
  return result.padEnd(array.length, '0').split('').map(digit => Number(digit));
}

console.log(moveZeros([0, 1, 0, 2, 0]));