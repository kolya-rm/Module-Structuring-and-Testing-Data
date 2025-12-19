const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal for numbers ending in 1. Should return ordinals ending in '1st'
// except numbers ending in 11 for which should return ordinals ending in '11th'

test("Should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("Should return '11th' for '11'", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
})

test("Should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("Should return '101st' for '101'", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("Should return '111th' for '111'", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});

test("Should return '121st' for 121", () => {
  expect(getOrdinalNumber(121)).toEqual("121st");
});

// Case 2: Identify the ordinal for numbers ending in 2. Should return ordinals ending in '2nd'
// except numbers ending in 12 for which should return ordinals ending in '12th'

test("Should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("Should return '12th' for '12'", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("Should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("Should return '102nd' for '102'", () => {
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

test("Should return '112th' for '112'", () => {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("Should return '122nd' for 122", () => {
  expect(getOrdinalNumber(122)).toEqual("122nd");
});

// Case 3: Identify the ordinal for numbers ending in 3. Should return ordinals ending in '3rd'
// except numbers ending in 13 for which should return ordinals ending in '13th'

test("Should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("Should return '13th' for '13'", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("Should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("Should return '103rd' for '103'", () => {
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

test("Should return '113th' for '113'", () => {
  expect(getOrdinalNumber(113)).toEqual("113th");
});

test("Should return '123rd' for 123", () => {
  expect(getOrdinalNumber(123)).toEqual("123rd");
});