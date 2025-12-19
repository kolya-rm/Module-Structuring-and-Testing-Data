const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal for numbers ending in 1. Should return ordinals ending in '1st'
// except numbers ending in 11 for which should return ordinals ending in '11th'

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

// Case 2: Identify the ordinal for numbers ending in 2. Should return ordinals ending in '2nd'
// except numbers ending in 12 for which should return ordinals ending in '12th'

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("Should return '12th' for '12'", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("Should return '102nd' for '102'", () => {
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

test("Should return '112th' for '112'", () => {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("should return '122nd' for 122", () => {
  expect(getOrdinalNumber(122)).toEqual("122nd");
});