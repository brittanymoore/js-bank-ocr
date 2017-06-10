describe("AccountNumber", () => {

    let AccountNumber = require('./../src/account-number');

    describe("isValid", () => {

        it("undefined", () => {
            let accountNumber = new AccountNumber();
            expect(accountNumber.isValid()).toBe(false);
        });

        it("123", () => {
            let accountNumber = new AccountNumber("123");
            expect(accountNumber.isValid()).toBe(false);
        });

        it("457508000", () => {
            let accountNumber = new AccountNumber("457508000");
            expect(accountNumber.isValid()).toBe(true);
        });

        it("664371495", () => {
            let accountNumber = new AccountNumber("664371495");
            expect(accountNumber.isValid()).toBe(false);
        });        

        it("711111111", () => {
            let accountNumber = new AccountNumber("711111111");
            expect(accountNumber.isValid()).toBe(true);
        });

        it("777777177", () => {
            let accountNumber = new AccountNumber("777777177");
            expect(accountNumber.isValid()).toBe(true);
        });

        it("200800000", () => {
            let accountNumber = new AccountNumber("200800000");
            expect(accountNumber.isValid()).toBe(true);
        });

        it("333393333", () => {
            let accountNumber = new AccountNumber("333393333");
            expect(accountNumber.isValid()).toBe(true);
        });        

        it("888888888", () => {
            let accountNumber = new AccountNumber("888888888");
            expect(accountNumber.isValid()).toBe(false);
        });   

        it("888886888", () => {
            let accountNumber = new AccountNumber("888886888");
            expect(accountNumber.isValid()).toBe(true);
        });

        it("555555555", () => {
            let accountNumber = new AccountNumber("555555555");
            expect(accountNumber.isValid()).toBe(false);
        });

        it("555655555", () => {
            let accountNumber = new AccountNumber("555655555");
            expect(accountNumber.isValid()).toBe(true);
        });

    });

    describe("isLegible", () => {

        it("123", () => {
            let accountNumber = new AccountNumber("123");
            expect(accountNumber.isLegible()).toBe(true);
        });

        it("123?5", () => {
            let accountNumber = new AccountNumber("123?5");
            expect(accountNumber.isLegible()).toBe(false);
        });      

    });

});
