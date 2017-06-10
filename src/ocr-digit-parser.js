function OCRDigitParser() {}

OCRDigitParser.scanDigit = function (digitString) {
    let digit = OCRDigitParser.digits[digitString];
    if (!digit) {
        digit = "?";
    }
    return digit;
};

OCRDigitParser.digits = {};
OCRDigitParser.digits[
    " _ " +
    "| |" +
    "|_|"
] = "0";
OCRDigitParser.digits[
    "   " +
    "  |" +
    "  |"
] = "1";
OCRDigitParser.digits[
    " _ " +
    " _|" +
    "|_ "
] = "2";
OCRDigitParser.digits[
    " _ " +
    " _|" +
    " _|"
] = "3";
OCRDigitParser.digits[
    "   " +
    "|_|" +
    "  |"
] = "4";
OCRDigitParser.digits[
    " _ " +
    "|_ " +
    " _|"
] = "5";
OCRDigitParser.digits[
    " _ " +
    "|_ " +
    "|_|"
] = "6";
OCRDigitParser.digits[
    " _ " +
    "  |" +
    "  |"
] = "7";
OCRDigitParser.digits[
    " _ " +
    "|_|" +
    "|_|"
] = "8";
OCRDigitParser.digits[
    " _ " +
    "|_|" +
    " _|"
] = "9";

OCRDigitParser.oneOffs = {};
OCRDigitParser.oneOffs["0"] = ["8"];
OCRDigitParser.oneOffs["1"] = ["7"];
OCRDigitParser.oneOffs["2"] = [];
OCRDigitParser.oneOffs["3"] = ["9"];
OCRDigitParser.oneOffs["4"] = [];
OCRDigitParser.oneOffs["5"] = ["6"];
OCRDigitParser.oneOffs["6"] = ["5"];
OCRDigitParser.oneOffs["7"] = ["1"];
OCRDigitParser.oneOffs["8"] = ["0", "9"];
OCRDigitParser.oneOffs["9"] = ["8", "3"];

module.exports = OCRDigitParser;
