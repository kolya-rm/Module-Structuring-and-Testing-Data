function isProperFraction(numerator, denominator) {
    return Math.abs(numerator / denominator) < 1;
}

module.exports = isProperFraction;