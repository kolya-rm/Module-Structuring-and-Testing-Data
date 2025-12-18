const getCardValue = require("./3-get-card-value");

// Case 2: Handle Number Cards (2-10):
test("Should return 2 for Two of Hearts", () => {
    const twoOfHearts = "2♥";
    expect(getCardValue(twoOfHearts)).toEqual(2);
});

test("Should return 3 for Three of Hearts", () => {
  const threeOfHearts = "3♥";
  expect(getCardValue(threeOfHearts)).toEqual(3);
});

test("Should return 4 for Four of Hearts", () => {
  const fourOfHearts = "4♥";
  expect(getCardValue(fourOfHearts)).toEqual(4);
});

test("Should return 5 for Five of Hearts", () => {
  const fiveOfHearts = "5♥";
  expect(getCardValue(fiveOfHearts)).toEqual(5);
});

test("Should return 6 for Six of Hearts", () => {
  const sixOfHearts = "6♥";
  expect(getCardValue(sixOfHearts)).toEqual(6);
});

test("Should return 7 for Seven of Hearts", () => {
  const sevenOfHearts = "7♥";
  expect(getCardValue(sevenOfHearts)).toEqual(7);
});

test("Should return 8 for Eight of Hearts", () => {
  const eightOfHearts = "8♥";
  expect(getCardValue(eightOfHearts)).toEqual(8);
});

test("Should return 9 for Nine of Hearts", () => {
  const nineOfHearts = "9♥";
  expect(getCardValue(nineOfHearts)).toEqual(9);
});

// Case 3: Handle Face Cards (10, J, Q, K):
test("Should return 10 for Ten of Clubs", () => {
  const tenOfClubs = "10♣";
  expect(getCardValue(tenOfClubs)).toEqual(10);
});

test("Should return 10 for Jack of Clubs", () => {
  const jackOfClubs = "J♣";
  expect(getCardValue(jackOfClubs)).toEqual(10);
});

test("Should return 10 for Queen of Clubs", () => {
  const queenOfClubs = "Q♣";
  expect(getCardValue(queenOfClubs)).toEqual(10);
});

test("Should return 10 for King of Clubs", () => {
  const kingOfClubs = "K♣";
  expect(getCardValue(kingOfClubs)).toEqual(10);
});

// Case 4: Handle Ace (A):
test("Should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
