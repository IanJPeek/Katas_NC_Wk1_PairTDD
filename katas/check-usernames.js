/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(userArray) {
  if (userArray.length === 0) return false

const noCaps = /[A-Z]/g
const noCapsFound = userArray.filter(user => user.match(noCaps))
if (noCapsFound.length> 0) {return false}
// console.log(noCapsFound, "regex")

const onlyUnder = /\W/g
const onlyUnderFound = userArray.filter(user => user.match(onlyUnder));
// console.log(onlyUnderFound, "onlyUnders")
if (onlyUnderFound.length > 0) {
  return false;
}

 const notShortOrLong = userArray.filter(user => user.length > 4 && user.length<21) 
//  console.log (notShortOrLong,notShortOrLong.length, userArray.length)
if (notShortOrLong.length === userArray.length) {return true}
return false

}

module.exports = checkUsernames;
