const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("Should return false for improper fraction", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

test("Should return true for a proper negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
