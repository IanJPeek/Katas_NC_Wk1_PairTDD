/*
  The function getMiddleChar should return the middle character of a string. If the string is of even length, return the middle two characters.
  It should ignore any whitespace and special characters.
  E.g.
  'hello world!!' should return 'ow'
*/

function getMiddleChar(str) {

  if (str.length < 3) return str;

  const noCharOrWhitespace = str.replace(/\W+/g, "")
  const stringOnly = noCharOrWhitespace;

  let oddMiddle = stringOnly[(stringOnly.length - 1) / 2];
  if (stringOnly.length % 2 === 1) return oddMiddle;

  let evenMiddle1 = stringOnly[(stringOnly.length - 2) / 2];
  let evenMiddle2 = stringOnly[stringOnly.length / 2];
  let evenMiddles = evenMiddle1 + evenMiddle2;

  if (stringOnly.length % 2 === 0) {
    return evenMiddles;
  }

}

module.exports = getMiddleChar;
