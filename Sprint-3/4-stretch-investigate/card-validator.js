function cardValidator(cardNumber) {
  const digitsRegEx = /\d/;
  let digitsSum = 0;

  if (cardNumber.length !== 16) {
    return false;
  }
  for (let i = 0; i < cardNumber.length; i++) {
    const currentChar = cardNumber[i];
    if (!digitsRegEx.test(currentChar)) {
      return false;
    }
    digitsSum += Number(currentChar);
  }
  if (digitsSum < 16) {
    return false;
  }
}

module.exports = cardValidator;