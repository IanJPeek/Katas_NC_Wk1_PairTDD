const {expect} = require("chai")
const sumArgs = require('../katas/sum-args');

describe.only('sumArgs', () => {
  it('should return 0 when passed no arguments', () => {
    expect(sumArgs()).to.equal(0)
  });
  it('should return the argument when passed a single number', () => {
    expect(sumArgs(25)).to.equal(25);
  });
  it("should return the total when passed two arguments", () => {
    expect(sumArgs(23, 67)).to.equal(90);
  });
  it('should return the total when passed many arguments', () => {
    expect(sumArgs(1,2,3,4,5)).to.equal(15);
    expect(sumArgs(1, 2, 3, 4, 5,6,7,8,9)).to.equal(45);
  });
});
