/*
 * FileManager
 * Uses node 'fs' to read / write files
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
            fulfill(data.toString().split("\r\n"));
        });

    });

};

FileManager.prototype.write = function (filePath, content) {
    this.fs.writeFile(filePath, content, (err) => {
        if (err) {
            throw err;
        }
        console.log("File saved successfully.");
    });
};

module.exports = FileManager;