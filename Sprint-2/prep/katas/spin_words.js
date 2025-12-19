function spinWords(str) {
  let tokens = str.split(' ');
  let result = [];
  for (let i = 0; i < tokens.length; i++) {
    let resultStr;
    if (tokens[i].length < 5) {
      resultStr = tokens[i];
    } else {
      resultStr = tokens[i].split('').reverse().join('');
    } 
    result.push(resultStr);
  }
  return result.join(" ");
}

console.log(spinWords("abc abcd abcdef"));

module.exports = spinWords;