const { expect } = require("chai");
const checkUsernames = require("../katas/check-usernames");

describe("checkUsernames", userArray => {
  it("returns false when passed an empty array", () => {
    expect(checkUsernames([])).to.equal(false);
  });

  it("returns false if a username is below 5 characters", () => {
    expect(checkUsernames(["solo"])).to.equal(false);
    expect(checkUsernames(["me", "otherguy"])).to.equal(false);
  });

  it("returns false if a username is longer than 20 characters", () => {
    expect(checkUsernames(["ilikelongmnamesandicannotlie"])).to.equal(false);
    expect(
      checkUsernames(["randomguy12", "squintydangerismymiddlenamemcgee"])
    ).to.equal(false);
  });

  it("returns true if a username is between 5 and twenty characters", () => {
    expect(checkUsernames(["borris", "germany", "betelgeuse"])).to.equal(true);
    expect(
      checkUsernames(["fiver", "twentyletterslonghuh", "regularguy6"])
    ).to.equal(true);
  });

  it("returns false when passed an uppercase letter", () => {
    expect(checkUsernames(["ohWhat"])).to.equal(false);
    expect(checkUsernames(["NoAccessGranted"])).to.equal(false);
  });

  it("returns false when passed a special character, other than an underscore", () => {
    expect(checkUsernames(["wh@@@tnow", "nothim"])).to.equal(false);
    expect(checkUsernames(["oh$urely^ot", "northcoder"])).to.equal(false);
    expect(checkUsernames(["#as#tagnotallowed", "whymiwithhim"])).to.equal(
      false
    );
    expect(checkUsernames(["let_me_in"])).to.equal(true)
    expect(checkUsernames(["i_am_allowed","i_am_n't_allow"])).to.equal(false)
  });

});
