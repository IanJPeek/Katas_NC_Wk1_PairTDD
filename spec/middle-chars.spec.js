const { expect } = require("chai");
const middleChar = require("../katas/middle-char");

describe.only("middleChar", str => {
  it("returns a single letter when given a one-letter string", () => {
    expect(middleChar("a")).to.equal("a");
  });
  it("returns two letters when given a two-letter string", () => {
    expect(middleChar("zo")).to.equal("zo");
  });
  it("returns the middle character of a string with an odd number of letters", () => {
    expect(middleChar("sup")).to.equal("u");
    expect(middleChar("chimp")).to.equal("i");
    expect(middleChar("ratatouille")).to.equal("o");
  });
  it("returns the middle two characters of a string with an even number of letters", () => {
    expect(middleChar("barf")).to.equal("ar");
    expect(middleChar("pickle")).to.equal("ck");
    expect(middleChar("bamboozled")).to.equal("oo");
  });
it("ignores whitespace to return a single character in a string of several words (odd length)", () => {
  expect(middleChar("what rubbish")).to.equal("u");
  expect(middleChar("odd what you find sometimes")).to.equal("i");
})
  it("ignores whitespace when returning the middle two characters of a string", () => {
    expect(middleChar("hello world")).to.equal("ow");
    expect(
      middleChar("I like to have many spaces in the gaps between words")
    ).to.equal("si");
  });

  it("ignores whitespace & special characters when returning the middle two characters of a string", () => {
    expect(middleChar("if it is a lot of space - or punctuation - well, what then?!?!")).to.equal("un");
  });
});
