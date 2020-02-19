/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(numArr) {
  if (numArr.length ===0){return 0}

  const max_er = numArr.sort(function(a,b) {
    return b-a;
  })
  return max_er[0]

}


function min(numArr) {
  if (numArr.length === 0) {
    return 0;
  }
  const min_er = numArr.sort(function(a,b) {
    return a-b;
  });
  return min_er[0];
}

module.exports = { max, min };

// vegArray.sort(function(a, b) {
//   return a.quantity - b.quantity;
// });
