const { expect } = require("chai");
const alternateCase = require("../katas/alternate-case");

describe("alternateCase", str => {
  it("returns an empty string unchanged", () => {
    expect(alternateCase("")).to.equal("");
  });

  it("returns a single letter as upperCase", () => {
    expect(alternateCase("a")).to.equal("A");
  });

  it("returns a two-letter string in alternate case", () => {
    expect(alternateCase("eH")).to.equal("Eh");
  });

  it('returns longer words in alternating case', () => {
     expect(alternateCase("testing")).to.equal("TeStInG");
      expect(alternateCase("chImPANzEE")).to.equal("ChImPaNzEe");
  });

  it('returns several words in alternate cases where different starting cases are required', () => {
    expect(alternateCase("chocolate marshmallow pie")).to.equal("ChOcOlAtE mArShMaLlOw PiE")
  });

  it("returns many words in alternate cases with varying length words and longer sentences", () => {
    expect(
      alternateCase("By golly we might just have a working solution")
    ).to.equal("By GoLlY wE mIgHt JuSt HaVe A wOrKiNg SoLuTiOn");
  })

  it("returns many words in alternate cases with varying length words and longer (punctuated) sentences", () => {
    expect(
      alternateCase(
        "Gosh and darn, I can barely believe it; it's only gone and worked!"
      )
    ).to.equal(
      "GoSh AnD dArN, i CaN bArElY bElIeVe It; It'S oNlY gOnE aNd WoRkEd!"
    );
  });
});

//  let multipleWords = "chocolate marshmallow pie";
//  let actualResult = alternateCase(multipleWords);
//  let expectedResult = "ChOcOlAtE mArShMaLlOw PiE";
//  expect(actualResult).to.equal(expectedResult);