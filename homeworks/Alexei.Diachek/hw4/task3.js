/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = input => {
  if (!Array.isArray(input)) {
    return false;
  }
  let output = input.filter(function(elem) {
    if (elem % 3 === 0 || elem % 5 === 0 || elem % 7 === 0) {
      return elem;
    }
  });
  return output;
};

module.exports = advancedFilter;
