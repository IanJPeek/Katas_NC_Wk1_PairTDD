/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {

let total = 0
const numbers = (num.toString().split(""))

const totalMap = numbers.map(number => number !== "." ?total += +number : ".")
const grandTotal = totalMap[totalMap.length-1]

return grandTotal

}

module.exports = sumDigits;
