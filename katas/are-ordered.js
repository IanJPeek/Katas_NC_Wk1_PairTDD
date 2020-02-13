/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(numArray) {
  if (numArray.length === 0) return false;
  if (numArray.length === 1) return true;
  
  let ascArray = true
  for (i = 1; i < numArray.length; i++) {
   numArray[i] > numArray[i - 1] ? true : ascArray = false
  }
  return ascArray
}

module.exports = areOrdered;
