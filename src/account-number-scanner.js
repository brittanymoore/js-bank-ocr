/*
 * AccountNumberScanner
 * Provides the helper functions needed to convert an array of ocr-scanned
 * lines to an array of account number strings.
 */

const OCRDigitParser = require("./ocr-digit-parser");
const AccountNumber = require("./account-number");

function AccountNumberScanner() { }

// translate an array of strings into an array of account numbers
AccountNumberScanner.extractAccountNumbers = function (fileLines) {
    let accountNumbers = [];
    for (let i = 0; i + 3 < fileLines.length; i += 4) {
        let ocrDigits = AccountNumberScanner.extractAccountNumber(fileLines.slice(i, i + 3));
        let accountNumber = new AccountNumber(ocrDigits);
        accountNumbers.push(accountNumber);
    }
    return accountNumbers;
};

// extract a single account number from a set of lines
AccountNumberScanner.extractAccountNumber = function (lines) {
    const lineLength = 27;
    lines[0] = AccountNumberScanner.padLine(lines[0], lineLength);
    lines[1] = AccountNumberScanner.padLine(lines[1], lineLength);
    lines[2] = AccountNumberScanner.padLine(lines[2], lineLength);
    let digits = "";
    for (let i = 0; i + 2 < lineLength; i += 3) {
        let digit = AccountNumberScanner.extractDigit(lines, i);
        digits += digit;
    }
    return digits;
};

// extract a single digit from a set of lines
AccountNumberScanner.extractDigit = function (lines, i) {
    let digitString = lines[0].slice(i, i + 3).concat(lines[1].slice(i, i + 3), lines[2].slice(i, i + 3));       
    let digit = OCRDigitParser.scanDigit(digitString);
    return digit;
};

AccountNumberScanner.padLine = function (line, length) {
    return AccountNumberScanner.padSpacesRight(line, length);
};

AccountNumberScanner.padSpacesRight = function(str, length) {
    while (str.length < length) {
        str += " ";
    }
    return str;
};

module.exports = AccountNumberScanner;