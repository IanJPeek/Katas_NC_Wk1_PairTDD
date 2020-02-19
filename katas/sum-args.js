/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs() {
  if (arguments.length === 0) {
    return 0;
  }
  let values = [...arguments];
  let total = 0;
  const totaller = values.map(num => (total = total + num));

  return total;
}

module.exports = sumArgs;
