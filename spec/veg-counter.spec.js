const { expect } = require("chai");
const countVeg = require("../katas/veg-counter");

describe("countVeg", (vegArr, vegToCount) => {
  it("returns 0 when given an empty array", () => {
    expect(countVeg([])).to.equal(0);
  });

  it("returns 0 when a veg is not present in an array", () => {
    expect(
      countVeg([{ name: "Carrot", type: "root", quantity: 5 }], "Celeriac")
    ).to.equal(0);
    expect(
      countVeg(
        [
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 }
        ],
        "Cauliflower"
      )
    ).to.equal(0);
  });

  it("returns the total of a veg when present in an array", () => {
    expect(
      countVeg([{ name: "Carrot", type: "root", quantity: 5 }], "Carrot")
    ).to.equal(5);
    expect(
      countVeg(
        [
          { name: "Onion", type: "bulb", quantity: 3 },
          { name: "Chard", type: "leaf", quantity: 3 },
          { name: "Runner beans", type: "legume", quantity: 8 }
        ],
        "Runner beans"
      )
    ).to.equal(8);
  });
});
