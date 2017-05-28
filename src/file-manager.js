/*
 * FileManager
 * Uses node 'fs' to read / write files, and handles parsing
 * the ocr values to digit strings.
 */

function FileManager(filePath, fs) {
    this.filePath = filePath;
    this.fs = fs;
}

FileManager.prototype.read = function () {

    return new Promise((fulfill, reject) => {

        this.fs.readFile(this.filePath, (err, data) => {
            if (err) {
                reject(err);
            }
            fulfill(this.parseNumbers(data.toString()));
        });

    });

}

FileManager.prototype.parseNumbers = function (fileContents) {
    let fileLines = fileContents.split('\r\n');
    let numbers = [];
    for (let i = 0; i + 3 < fileLines.length; i += 4) {
        let top = FileManager.padSpacesRight(fileLines[i], 27);
        let middle = FileManager.padSpacesRight(fileLines[i + 1], 27);
        let bottom = FileManager.padSpacesRight(fileLines[i + 2], 27);
        let number = "";
        for (let j = 0; j + 2 < top.length && j + 2 < 27; j += 3) {
            let digitString = top.slice(j, j + 3).concat(middle.slice(j, j + 3), bottom.slice(j, j + 3));       
            let digit = FileManager.scanValues[digitString];
            if (!digit) {
                digit = "?";
            }
            number += digit;
        }
        numbers.push(number);
    }
    return numbers; 
}

FileManager.prototype.write = function (filePath, content) {
    this.fs.writeFile(filePath, content, (err) => {
        if (err) {
            throw err;
        }
        console.log("File saved successfully.");
    })
}

FileManager.padSpacesRight = function(str, length) {
    while (str.length < length) {
        str += ' ';
    }
    return str;
}

// This is a helper object that can be used to lookup the 
// number associated with a given three-line string.
FileManager.scanValues = {}
FileManager.scanValues[
    " _ " +
    "| |" +
    "|_|"
] = "0";
FileManager.scanValues[
    "   " +
    "  |" +
    "  |"
] = "1";
FileManager.scanValues[
    " _ " +
    " _|" +
    "|_ "
] = "2";
FileManager.scanValues[
    " _ " +
    " _|" +
    " _|"
] = "3";
FileManager.scanValues[
    "   " +
    "|_|" +
    "  |"
] = "4";
FileManager.scanValues[
    " _ " +
    "|_ " +
    " _|"
] = "5";
FileManager.scanValues[
    " _ " +
    "|_ " +
    "|_|"
] = "6";
FileManager.scanValues[
    " _ " +
    "  |" +
    "  |"
] = "7";
FileManager.scanValues[
    " _ " +
    "|_|" +
    "|_|"
] = "8";
FileManager.scanValues[
    " _ " +
    "|_|" +
    " _|"
] = "9";

module.exports = FileManager;