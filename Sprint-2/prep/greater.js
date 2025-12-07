function compare(a, b) {
  if (a === b) {
    return `${a} equals ${b}`;
  }
  if (a > b) {
    return `${a} greater than ${b}`;
  }
  return `${b} greater than ${a}`;
}

console.log(compare("100", "23"));
console.log(compare(100, 23));
console.log(compare("23", "23"));
console.log(compare("100", "100"));