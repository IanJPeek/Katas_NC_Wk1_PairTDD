/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {

  const adjustedNum = (Math.ceil((year+1)/100))
  const lastDigit = adjustedNum.toString().slice(-1);

  if (lastDigit == 1) {
    return "" + adjustedNum + "st";
  }
  if (lastDigit == 2) {
    return "" + adjustedNum + "nd";
  }
  if (lastDigit == 3) {
    return "" + adjustedNum + "rd";
  }
  // if (lastDigit !== (1 || 2 || 3)) 
  else
  {
    return "" + adjustedNum + "th";
  }

}

module.exports = getCentury;
