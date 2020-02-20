const { expect } = require("chai");
const range = require("../katas/range");

describe.only("range", (length, startVal, stepVal) => {
  it("when given no arguments returns an empty array", () => {
    expect(range()).to.eql([]);
  });
  it("when given only a 'length' argument returns an array of numbers of a given length, counting up in ones", () => {
    expect(range(5)).to.eql([0, 1, 2, 3, 4]);
    expect(range(9)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(range(0)).to.eql([]);
  });
  it("when given 'length' and 'startVal' arguments, returns a correct array using these", () => {
    expect(range(5, 2)).to.eql([2, 3, 4, 5, 6]);
    expect(range(9, 1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(range(0, 2)).to.eql([]);
  });
  it("when given 'length', 'startVal' and 'step' arguments, returns a correct array using all of these ", () => {
    expect(range(5, 3, 2)).to.eql([3, 5, 7, 9, 11]);
    expect(range(4, 1,3)).to.eql([1, 4, 7, 10]);
  });
});
