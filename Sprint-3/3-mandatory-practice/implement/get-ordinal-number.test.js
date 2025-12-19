const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal numbers ending in 1 except ending in 11

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("Should return '11th' for '11'", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
})

test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("Should return '101st' for '101'", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("Should return '111th' for '111'", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});

test("should return '121st' for 121", () => {
  expect(getOrdinalNumber(121)).toEqual("121st");
});
