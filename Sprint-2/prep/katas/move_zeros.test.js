const moveZeros = require("./move_zeros");

test("Should move zeros to the end", () => {
  const input = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
  const targetOutput = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
  expect(moveZeros(input)).toEqual(targetOutput);
});

test("Does nothing if there aren't zeros", () => {
  const input = [1, 2, 3];
  const targetOutput = [1, 2, 3];
  expect(moveZeros(input)).toEqual(targetOutput);
});

test("Handles all zeros", () => {
  const input = [0, 0, 0];
  const targetOutput = [0, 0, 0];
  expect(moveZeros(input)).toEqual(targetOutput);
});

test("Handle mixed types (false is not 0)", () => {
  const input = [false, 1, 0, 1, 2, 0, "a"];
  const targetOutput = [false, 1, 1, 2, "a", 0, 0];
  expect(moveZeros(input)).toEqual(targetOutput);
});