const { expect } = require("chai");
const orderVeg = require("../katas/order-veg");

describe.only("orderVeg", vegArray => {
  it("returns an empty array when given an empty array", () => {
    expect(orderVeg([])).to.eql([]);
  });

  it("returns an array of a single item when given only that", () => {
    expect(orderVeg([{ name: "Carrot", type: "root", quantity: 5 }])).to.eql([
      { name: "Carrot", type: "root", quantity: 5 }
    ]);
  });

  it("returns two items in order, when given an array of two items", () => {
    const basket1 = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 }
    ];
    expect(orderVeg(basket1)).to.eql(basket1);
    const basket2 = [
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 }
    ];
    expect(orderVeg(basket2)).to.eql(basket2);
    const basket3 = [
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 }
    ];
    const basket3ordered = [
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Carrot", type: "root", quantity: 5 }
    ];
    expect(orderVeg(basket3)).to.eql(basket3ordered);
    const basket4 = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 }
    ];
    const basket4ordered = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 }
    ];
     expect(orderVeg(basket4)).to.eql(basket4ordered);
  });

it('returns an array of items in order, when given multiple items', () => {
  const testArray = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    const testArrayOrdered = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    expect(orderVeg(testArray)).to.eql(testArrayOrdered)
});


});

