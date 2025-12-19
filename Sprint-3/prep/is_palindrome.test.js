const isPalindrome = require("./is_palindrome");

test("Should return true for empty string", () => {
  expect(isPalindrome("")).toBeTruthy();
})

test("Should return true for non-alphanumeric string", () => {
  expect(isPalindrome(" ")).toBeTruthy();
});

test("Should return true for one-char string", () => {
  expect(isPalindrome("f")).toBeTruthy();
});

test("Should return true for long palindrome string", () => {
  expect(isPalindrome("FtAtF")).toBeTruthy();
});

test("Should return true for long palindrome string with non-alphanumeric string", () => {
  expect(isPalindrome("F tA tF")).toBeTruthy();
});

test("Should return false for long non-palindrome string", () => {
  expect(isPalindrome("aBdga")).toBeFalsy();
});

test("Should return false for non case sensitive palindrome", () => {
  expect(isPalindrome("AbcdDcBa")).toBeFalsy();
});

test("Should return false for long non-palindrome string with non alphanumeric characters", () => {
  expect(isPalindrome("Remember! Remember the 5th of November!")).toBeFalsy();
});