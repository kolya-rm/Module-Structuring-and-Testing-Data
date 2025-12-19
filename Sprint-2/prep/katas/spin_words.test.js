const spinWords = require("./spin_words");

test("Should leave without changes", () => {
  const inputStr = "This is a test";
  const outputStr = inputStr;
  expect(spinWords(inputStr)).toEqual(outputStr);
});

test("Should reverse single word", () => {
  const inputStr = "Welcome";
  const outputStr = "emocleW";
  expect(spinWords(inputStr)).toEqual(outputStr);
});

test("Mix of long and short word. Should reverse words with length more than 5 characters", () => {
  const inputStr = "Hey fellow warriors";
  const outputStr = "Hey wollef sroirraw";
  expect(spinWords(inputStr)).toEqual(outputStr);
});
