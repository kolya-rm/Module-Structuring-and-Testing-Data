function getCountryCode(phoneNumber) {
  if (phoneNumber.startsWith("+44")) {
    return "UK";
  }
}

console.log(getCountryCode("+447831620328"));
console.log(getCountryCode("+989871783972"));