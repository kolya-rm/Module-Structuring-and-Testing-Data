function cardValidator(cardNumber) {
  if (cardNumber.length !== 16) {
    return false;
  }

  const digitsRegEx = /\d/;
  const lastChar = cardNumber[cardNumber - 1];

  if (digitsRegEx.test(lastChar) && Number(lastChar) % 2 != 0) {
    return false;
  }

  let digitsSum = 0;
  
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