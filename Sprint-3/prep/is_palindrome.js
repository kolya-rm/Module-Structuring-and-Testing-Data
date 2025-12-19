function isPalindrome(str) {
  // Remove all characters that are not letters or numbers
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanedStr += char;
    }
  }

  // Reverse the cleaned string
  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }

  // Check if the cleaned string is the same forwards and backwards
  if (cleanedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
