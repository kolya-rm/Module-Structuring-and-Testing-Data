const getAngleType = require("./1-get-angle-type");

test("should identify right angle (angle = 90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("Should identify acute angles (angle < 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

test("Should identify obtuse angles (90° < angle < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("Should identify straight angle (angle = 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Should identify reflex angle (180° < angle < 360°)", () => {
  expect(getAngleType(210)).toEqual("Reflex angle");
});