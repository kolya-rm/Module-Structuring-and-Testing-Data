function passwordValidator(password) {
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


module.exports = passwordValidator;