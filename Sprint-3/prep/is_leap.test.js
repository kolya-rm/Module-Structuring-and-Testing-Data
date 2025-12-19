const isLeap = require("./is_leap");

test("Should return false for 1997", () => {
  expect(isLeap(1997)).toBeFalsy();
});

test("Should return true for 1996", () => {
  expect(isLeap(1996)).toBeTruthy();
});

test("Should return false for 1800", () => {
  expect(isLeap(1800)).toBeFalsy();
});

test("Should return false for 1600", () => {
  expect(isLeap(1600)).toBeTruthy();
});
