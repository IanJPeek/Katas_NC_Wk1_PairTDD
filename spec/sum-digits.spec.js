const {expect} = require ("chai")

const sumDigits = require('../katas/sum-digits');

describe.only('sumDigits', () => {
  it('returns the number when passed a single digit number', () => {
    expect(sumDigits(7)).to.equal(7)
  });

  it('returns the total of a two-digit number', () => {
    expect(sumDigits(14)).to.equal(5)
    expect(sumDigits(48)).to.equal(12)
  });

  it('returns the totalled digits of a number of any length', () => {
    expect(sumDigits(234)).to.equal(9);
    expect(sumDigits(54087)).to.equal(24);
    expect(sumDigits(1003002)).to.equal(6);
    expect(sumDigits(9876543210)).to.equal(45);
  });

  it('returns the total of a decimal number/ float', () => {
    expect(sumDigits(10.5)).to.equal(6);
    expect(sumDigits(17.206)).to.equal(16);

  });
});

