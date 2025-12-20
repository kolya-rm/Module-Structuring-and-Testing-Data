function cardValidator(cardNumber) {
  //checking the card number length
  if (cardNumber.length !== 16) {
    return false;
  }

  const digitsRegEx = /\d/;
  const lastChar = cardNumber[cardNumber.length - 1];

  //checking the card number last character is even digit
  if (digitsRegEx.test(lastChar) && Number(lastChar) % 2 != 0) {
    return false;
  }

  let digitsSum = 0;
  
  for (let i = 0; i < cardNumber.length; i++) {
    const currentChar = cardNumber[i];
    //checking all the card number characters are digits
    if (!digitsRegEx.test(currentChar)) {
      return false;
    }
    //summing digits of the card number
    digitsSum += Number(currentChar);
  }
  //checking sum of digits of the card number
  if (digitsSum < 16) {
    return false;
  }
  //returning true if all checks passed
  return true;
}


module.exports = cardValidator;