describe("FileManager", () => {

    let FileManager = require('./../src/file-manager');

    describe("padSpacesRight", () => {

        it("abc 5", () => {
            expect(FileManager.padSpacesRight("abc", 5)).toBe("abc  ");
        });

    });

});