function cardValidator(cardNumber) {
  if (cardNumber.length !== 16) {
    return false;
  }
}


module.exports = cardValidator;