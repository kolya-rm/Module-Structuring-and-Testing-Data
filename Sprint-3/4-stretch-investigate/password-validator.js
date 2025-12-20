function passwordValidator(password) {
    if (password.length < 5) {
        return false;
    }

    const upperCaseLettersRegEx = /[A-Z]/;
    let hasUpperCaseLetter = false;
    
    for (let i = 0; i < password.length; i++) {
        if (upperCaseLettersRegEx.test(password[i])) {
            hasUpperCaseLetter = true;
        }
    }
    return hasUpperCaseLetter;
}


module.exports = passwordValidator;