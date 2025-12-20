/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
const previousPasswords = ["Bcd1$"];

test("Password should have at least 5 characters", () => {
  // Arrange
  const password = "Ab1$";
  // Act
  const targetOutput = isValidPassword(password, previousPasswords);
  // Assert
  expect(targetOutput).toBe(false);
});

test("Password should have at least 1 English uppercase letter", () => {
  const password = "abc1#";
  const targetOutput = isValidPassword(password, previousPasswords);

  expect(targetOutput).toBe(false);
});

test("Password should have at least 1 English lowercase letter", () => {
  const password = "ABC1&";
  const targetOutput = isValidPassword(password, previousPasswords);

  expect(targetOutput).toBe(false);
});

test("Password should have at least 1 digit", () => {
  const password = "Abcd*";
  const targetOutput = isValidPassword(password, previousPasswords);

  expect(targetOutput).toBe(false);
})

test("Password should have at least 1 non-alphanumeric symbol ('!', '#', '$', '%', '.', '*', '&')", () => {
  const password = "Abcd1";
  const targetOutput = isValidPassword(password, previousPasswords);

  expect(targetOutput).toBe(false);
})

test("Password should not be in previous passwords array", () => {
  const password = "Bcd1$";
  const targetOutput = isValidPassword(password, previousPasswords);

  expect(targetOutput).toBe(false);
});