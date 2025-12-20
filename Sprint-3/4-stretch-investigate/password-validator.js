function passwordValidator(password, previousPasswords) {
    for (let i = 0; i < previousPasswords.length; i++) {
      const currentPreviousPassword = previousPasswords[i];

      if (password === currentPreviousPassword) {
        return false
      }

    }
    if (password.length < 5) {
        return false;
    }

    const uppercaseLettersRegEx = /[A-Z]/;
    const lowercaseLettersRegEx = /[a-z]/;
    const digitsRegEx = /[0-9]/;
    const nonAlphanumericSymbolsRegEx = /[!#\$%\.\*&]/;
    let hasUppercaseLetter = false;
    let hasLowercaseLetter = false
    let hasDigit = false;
    let hasNonAlphanumericSymbol = false;
    
    for (let i = 0; i < password.length; i++) {
    const currentSymbol = password[i];
      if (uppercaseLettersRegEx.test(currentSymbol)) {
        hasUppercaseLetter = true;
      }
      if (lowercaseLettersRegEx.test(currentSymbol)) {
        hasLowercaseLetter = true;
      }
      if (digitsRegEx.test(currentSymbol)) {
        hasDigit = true;
      }
      if (nonAlphanumericSymbolsRegEx.test(currentSymbol)) {
        hasNonAlphanumericSymbol = true;
      }  
    }
    return hasUppercaseLetter && hasLowercaseLetter && hasDigit && hasNonAlphanumericSymbol;
}

passwordValidator("Bcd1$", ["Bcd1$"]);
module.exports = passwordValidator;