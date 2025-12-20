const isValidCard = require("./card-validator");

test("Card number should be 16 characters length.", () => {
  const cardNumber = "123412341234123";
  const targetOutput = isValidCard(cardNumber);

  expect(targetOutput).toBe(false);
})