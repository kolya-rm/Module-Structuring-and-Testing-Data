const isValidCard = require("./card-validator");

test("Card number should be 16 characters length.", () => {
  const cardNumber = "0000111122223333444";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})

test("Card number should not contains non-digit characters", () => {
  const cardNumber = "0000111122223333444a";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
});