const isValidCard = require("./card-validator");

test("Card number should be 16 characters length.", () => {
  const cardNumber = "000044440000222";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})

test("Card number should not contains non-digit characters", () => {
  const cardNumber = "000044440000a222";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
});

test("Sum of the card number digits should not be less than 16", () => {
  const cardNumber = "0000111100002222";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})

test("Card number should ends in even digit", () => {
  const cardNumber = "0000444400002221";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})