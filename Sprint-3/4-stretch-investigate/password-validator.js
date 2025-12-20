function passwordValidator(password) {
    if (password.length < 5) {
        return false;
    }

    const uppercaseLettersRegEx = /[A-Z]/;
    const lowercaseLetterRegEx = /[a-z]/;
    let hasUppercaseLetter = false;
    let hasLowercaseLetter = false
    
    for (let i = 0; i < password.length; i++) {
        const currentSymbol = password[i];
        if (uppercaseLettersRegEx.test(currentSymbol)) {
            hasUppercaseLetter = true;
        }
        if (lowercaseLetterRegEx.test(currentSymbol)) {
            hasLowercaseLetter = true;
        }
    }
    return hasUppercaseLetter && hasLowercaseLetter;
}


module.exports = passwordValidator;