(function () {

    let AccountNumber = require('./src/account-number');
    let FileManager = require('./src/file-manager');
    let fs = require('fs');

    const OUTPUT_PATH = './output/output.txt';

    if (!process.argv[2]) {

        console.log("Usage: node main.js *filePath*");

    } else {

        // read the input file
        let fileManager = new FileManager(process.argv[2], fs);
        fileManager.read().then((numbers) => {

            let returnNumbers = numbers.map((number) => {
                return number.toString();
            });

            fileManager.write(OUTPUT_PATH, returnNumbers.join('\n'));

        });

    }

})();