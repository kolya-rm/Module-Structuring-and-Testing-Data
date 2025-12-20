const isValidCard = require("./card-validator");

test("Card number should be 16 characters length.", () => {
  const cardNumber = "000011112222333";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})

test("Card number should not contains non-digit characters", () => {
  const cardNumber = "000011112222333a";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
});

test("Sum of the card number digits should not be less than 16", () => {
  const cardNumber = "0000111100001111";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})