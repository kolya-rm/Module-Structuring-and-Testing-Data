function reverseWords(str) {
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
  return result;
}

console.log(reverseWords("abc abcd abcdef"));