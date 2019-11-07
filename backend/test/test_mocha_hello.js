
const ch = require("chai");

var greet = (name) => `Hello, ${name}!!`;

describe("Simple test to see if current setup is working", () => {

    it("It should say hello while greeting", ()=>{
        let EXPECTED_VALUE = "Hello, Tom!!";
        ch.expect(greet("Tom")).to.be.equal(EXPECTED_VALUE);
    });
});



