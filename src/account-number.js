/*
 * AccountNumber
 * Helper class that can be used to instantiate an account
 * number based on a string of digits.
 */

function AccountNumber(digits) {
    // properties
    this.digits = digits;
}

// determine whether the current account number has a valid
// checksum
AccountNumber.prototype.isValid = function () {

    // check for 9 digits and string type
    if (typeof(this.digits) !== "string" || this.digits.length !== 9) {
        return false;
    }

    var checksum = 0;
    var multiplier = 1;
    for (var i = this.digits.length - 1; i >= 0; i--) {
        checksum = checksum + (Number(this.digits[i]) * multiplier);
        multiplier++;
    }

    return checksum % 11 === 0;

}

AccountNumber.prototype.toString = function () {
    return `${this.digits}`;
}

module.exports = AccountNumber;