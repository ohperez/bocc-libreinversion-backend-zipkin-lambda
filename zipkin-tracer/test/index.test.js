const chai = require("chai");
const index = require("../src/index.js.js.js.js");

const { expect } = chai;

let event;
let context;

chai.use(require("chai-string"));

describe("Tests index", () => {
  it("verifies successful response", async () => {
    const result = await index.handler(event, context);

    expect(result).to.be.an("string");
    expect(result).to.startsWith("Your dice throw resulted in");
    expect(result).to.endsWith("Wow!");
  });
});
