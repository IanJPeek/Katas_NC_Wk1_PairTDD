const { expect } = require("chai");
const getCentury = require('../katas/get-century');

describe.only('getCentury', (year) => {
  it('takes a year between 0 and 99 & returns "1st"', () => {
    expect(getCentury(5)).to.equal("1st")
    expect(getCentury(17)).to.equal("1st");
  });
  it('takes a year between 100 and 199 & returns "2nd"', () => {
    expect(getCentury(100)).to.equal("2nd");
    expect(getCentury(107)).to.equal("2nd");
    expect(getCentury(199)).to.equal("2nd");
  });
  it('takes a year between 200 and 299 & returns "3rd"', () => {
    expect(getCentury(200)).to.equal("3rd");
    expect(getCentury(258)).to.equal("3rd");
    expect(getCentury(299)).to.equal("3rd");
  });
  it('takes a year between 300 and 1999 & returns the correct response ranging from the 4th-20th', () => {
    expect(getCentury(300)).to.equal("4th");
    expect(getCentury(1403)).to.equal("15th");
    expect(getCentury(1999)).to.equal("20th");
  });
  it('takes any year between 2,000 and 10,000 and returns the correct century', () => {
    expect(getCentury(2000)).to.equal("21st");
    expect(getCentury(2300)).to.equal("24th");
    expect(getCentury(5403)).to.equal("55th");
    expect(getCentury(7103)).to.equal("72nd");
     expect(getCentury(9287)).to.equal("93rd");
    expect(getCentury(9999)).to.equal("100th");
    expect(getCentury(10000)).to.equal("101st");
  });
});
