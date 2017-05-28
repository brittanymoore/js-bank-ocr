describe("AccountNumber", () => {

    let AccountNumber = require('./../src/account-number');

    describe("isValid", () => {

        let accountNumber = new AccountNumber();

        it("undefined", () => {
            accountNumber.digits = undefined;
            expect(accountNumber.isValid()).toBe(false);
        });

        it("123", () => {
            accountNumber.digits = "123";
            expect(accountNumber.isValid()).toBe(false);
        });

        it("457508000", () => {
            accountNumber.digits = "457508000";
            expect(accountNumber.isValid()).toBe(true);
        });

        it("664371495", () => {
            accountNumber.digits = "664371495";
            expect(accountNumber.isValid()).toBe(false);
        });        

        it("711111111", () => {
            accountNumber.digits = "711111111";
            expect(accountNumber.isValid()).toBe(true);
        });

        it("i777777177", () => {
            accountNumber.digits = "777777177";
            expect(accountNumber.isValid()).toBe(true);
        });

        it("200800000", () => {
            accountNumber.digits = "200800000";
            expect(accountNumber.isValid()).toBe(true);
        });

        it("333393333", () => {
            accountNumber.digits = "333393333";
            expect(accountNumber.isValid()).toBe(true);
        });        

        it("888888888", () => {
            accountNumber.digits = "888888888";
            expect(accountNumber.isValid()).toBe(false);
        });   

        it("888886888", () => {
            accountNumber.digits = "888886888";
            expect(accountNumber.isValid()).toBe(true);
        });

        it("555555555", () => {
            accountNumber.digits = "555555555";
            expect(accountNumber.isValid()).toBe(false);
        });

        it("555655555", () => {
            accountNumber.digits = "555655555";
            expect(accountNumber.isValid()).toBe(true);
        });

    });    



});