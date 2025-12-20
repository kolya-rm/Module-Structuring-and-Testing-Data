function isPalindrome(str) {
  // Remove all characters that are not letters or numbers
  let cleanedStr = str.replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  let reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is the same forwards and backwards
  return cleanedStr === reversedStr;
}

;module.exports = isPalindrome;
