function cardValidator(cardNumber) {
  const digitsRegEx = /\d/;

  if (cardNumber.length !== 16) {
    return false;
  }
  for (let i = 0; i < cardNumber.length - 1; i++) {
    const currentChar = cardNumber[i];
    if (!digitsRegEx.test(cardNumber)) {
      return false;
    }
  }
}


module.exports = cardValidator;