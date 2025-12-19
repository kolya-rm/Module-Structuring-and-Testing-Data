function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const last2Digits = num % 100;
  console.log(`${num} ${lastDigit} ${last2Digits}`);
  if (lastDigit === 1) {
    if (last2Digits === 11) {
      return num + "th";
    }
    return num + "st";
  }
  if (lastDigit === 2) {
    if (last2Digits === 12) {
      return num + "th";
    }
    return num + "nd";
  }
  if (lastDigit === 3) {
    if (last2Digits === 13) {
      return num + "th";
    }
    return num + "rd";
  }
  return num + "th";
}

module.exports = getOrdinalNumber;