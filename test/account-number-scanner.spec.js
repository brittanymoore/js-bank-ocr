describe("AccountNumberScanner", () => {

    let AccountNumberScanner = require('./../src/account-number-scanner');

    describe("padSpacesRight", () => {

        it("abc 5", () => {
            expect(AccountNumberScanner.padSpacesRight("abc", 5)).toBe("abc  ");
        });

    });

});