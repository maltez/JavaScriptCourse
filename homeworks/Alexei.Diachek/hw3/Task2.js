/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
  return input.filter(function(num) {
    if (isNumberInRange(num)) {
      return num;
    }
  });
}
function isNumberInRange(num) {
  return num > 0 && num < 10 ? true : false;
}
module.exports = advancedFilter;
