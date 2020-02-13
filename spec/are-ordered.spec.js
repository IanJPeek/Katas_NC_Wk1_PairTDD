const {expect} = require("chai")
const areOrdered = require('../katas/are-ordered');

describe('areOrdered', (numArray) => {
  it('returns false when given an empty array', () => {
    expect(areOrdered([])).to.eql(false)
  });
  it("returns true when given an array of a single number", () => {
    expect(areOrdered([0])).to.equal(true);
    expect(areOrdered([8])).to.equal(true);
    expect(areOrdered([2.7])).to.equal(true);
  });
  it("returns true when given an array of two numbers, ordered ascendingly", () => {
    expect(areOrdered([-8, 0])).to.equal(true);
    expect(areOrdered([8, 37])).to.equal(true);
    expect(areOrdered([2.7, 10])).to.equal(true);
  });
  it("returns false when given an array of two numbers, ordered descendingly", () => {
    expect(areOrdered([-8, -13])).to.equal(false);
    expect(areOrdered([8, 2])).to.equal(false);
    expect(areOrdered([2.7, -10])).to.equal(false);
  });
  it('returns true when given an array of several numbers, ordered ascendingly', () => {
    expect(areOrdered([-12, -3, 0, 0.2, 17])).to.equal(true);
    expect(areOrdered([0.02, 14, 100, 203.128, 30000, 100000000])).to.equal(true);
  });
   it('returns false when given an array of several numbers, any of which are not ascending', () => {
    expect(areOrdered([-12, -3, 0.5, 0.2, 17])).to.equal(false);
    expect(areOrdered([0.02, 14, 100, -203.128, 30000, -100000000])).to.equal(false);
   })
});
