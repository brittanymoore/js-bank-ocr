/*
 * AccountNumber
 * Helper class that can be used to instantiate an account
 * number based on a string of digits.
 */

function AccountNumber(digits) { 
    this.digits = digits;
    this.status = this.getStatus();
}

AccountNumber.prototype.isValid = function () {

    if (typeof(this.digits) !== "string" || 
        this.digits.length !== 9 ||
        !this.isLegible()) {
        return false;
    }

    return AccountNumber.validateChecksum(this.digits);

};

AccountNumber.prototype.getStatus = function () {

    let status = "";

    if (!this.isLegible()) {
        status = "ILL";
    } else if (!this.isValid()) {
        status = "ERR";
    }

    return status;

};

AccountNumber.prototype.isLegible = function () {
    if (!this.digits) {
        return false;
    }
    return this.digits.indexOf("?") === -1;
};

AccountNumber.prototype.toString = function () {
    return `${this.digits} ${this.status}`;
};

AccountNumber.validateChecksum = function (digits) {

    var checksum = 0;
    var multiplier = 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        checksum = checksum + (Number(digits[i]) * multiplier);
        multiplier++;
    }

    return checksum % 11 === 0;

};

module.exports = AccountNumber;