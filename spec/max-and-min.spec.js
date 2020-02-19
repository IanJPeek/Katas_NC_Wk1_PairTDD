const {expect} = require ("chai")
const { max, min } = require('../katas/max-and-min');

describe('max', (numArr) => {
  it('returns 0 when given an empty array', () => {
    expect(max([])).to.equal(0)
  });
  it('returns the single number when given an array of one number', () => {
    expect(max([37])).to.equal(37)
  });
  it('returns the larger number from an array of two numbers', () => {
    expect(max([6, 78])).to.equal(78);
  });
  it("returns the largest number from an array of several numbers", () => {
    expect(max([9, 2.5, 80.7, 3.241, 9005, 85302, -47, 10000])).to.equal(85302);
  });
});

describe('min', (numArr) => {
  it("returns 0 when given an empty array", () => {
    expect(min([])).to.equal(0);
  });
  it("returns the single number when given an array of one number", () => {
    expect(min([24])).to.equal(24);
  });
  it("returns the smaller number from an array of two numbers", () => {
    expect(min([6, 78])).to.equal(6);
  });
  it("returns the smallest number from an array of several numbers", () => {
    expect(min([9, 2.5, 80.7, 3.241, 9005, 85302, -47, 10000])).to.equal(-47);
  });
  
});
