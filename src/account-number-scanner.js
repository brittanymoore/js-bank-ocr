/*
 * AccountNumberScanner
 * Provides the helper functions needed to convert an array of ocr-scanned
 * lines to an array of account number strings.
 */

function AccountNumberScanner() { }

// translate an array of strings into an array of account numbers
AccountNumberScanner.extractAccountNumbers = function (fileLines) {
    let numbers = [];
    for (let i = 0; i + 3 < fileLines.length; i += 4) {
        let number = AccountNumberScanner.extractAccountNumber(fileLines.slice(i, i + 3));
        numbers.push(number);
    }
    return numbers;
};

// extract a single account number from a set of lines
AccountNumberScanner.extractAccountNumber = function (lines) {
    const lineLength = 27;
    lines[0] = AccountNumberScanner.padLine(lines[0], lineLength);
    lines[1] = AccountNumberScanner.padLine(lines[1], lineLength);
    lines[2] = AccountNumberScanner.padLine(lines[2], lineLength);
    let number = "";
    for (let i = 0; i + 2 < lineLength; i += 3) {
        let digit = AccountNumberScanner.extractDigit(lines, i);
        number += digit;
    }
    return number;
};

// extract a single digit from a set of lines
AccountNumberScanner.extractDigit = function (lines, i) {
    let digitString = lines[0].slice(i, i + 3).concat(lines[1].slice(i, i + 3), lines[2].slice(i, i + 3));       
    let digit = AccountNumberScanner.scannableDigits[digitString];
    if (!digit) {
        digit = "?";
    }
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

// This is a helper object that can be used to lookup the 
// number associated with a given three-line string.
AccountNumberScanner.scannableDigits = {};
AccountNumberScanner.scannableDigits[
    " _ " +
    "| |" +
    "|_|"
] = "0";
AccountNumberScanner.scannableDigits[
    "   " +
    "  |" +
    "  |"
] = "1";
AccountNumberScanner.scannableDigits[
    " _ " +
    " _|" +
    "|_ "
] = "2";
AccountNumberScanner.scannableDigits[
    " _ " +
    " _|" +
    " _|"
] = "3";
AccountNumberScanner.scannableDigits[
    "   " +
    "|_|" +
    "  |"
] = "4";
AccountNumberScanner.scannableDigits[
    " _ " +
    "|_ " +
    " _|"
] = "5";
AccountNumberScanner.scannableDigits[
    " _ " +
    "|_ " +
    "|_|"
] = "6";
AccountNumberScanner.scannableDigits[
    " _ " +
    "  |" +
    "  |"
] = "7";
AccountNumberScanner.scannableDigits[
    " _ " +
    "|_|" +
    "|_|"
] = "8";
AccountNumberScanner.scannableDigits[
    " _ " +
    "|_|" +
    " _|"
] = "9";

module.exports = AccountNumberScanner;