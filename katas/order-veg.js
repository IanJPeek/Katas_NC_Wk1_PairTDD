/*
  The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.
  e.g.
  vegCounter([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
])
should return:
[
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]
*/

function orderVeg(vegArray) {

  if (vegArray.length < 2) return vegArray;

  vegArray.sort(function(a,b){return a.quantity-b.quantity})

  return vegArray

}

// myArray.sort(function(a, b) {
//   return a.distance - b.distance;
// });

// points.sort(function(a, b){return a-b});


module.exports = orderVeg;
