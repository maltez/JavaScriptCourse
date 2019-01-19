/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
  return input.filter(function(num) {
    if (isPositive(num)) {
      return num;
    }
  });
}
function isPositive(num) {
  return num > 0 ? true : false;
}

module.exports = negativeFilter;
