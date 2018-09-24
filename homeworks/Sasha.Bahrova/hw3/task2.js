/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var newArray = [];
    function isNumberInRange(i) {
    if (i > 0 && i < 10) {
      return true;
    }
  };
  for(var i = 0; i < input.length; i++) {
    if(isNaN(input[i])){
      throw new Error('Input not a number');
    }
    if(isNumberInRange(input[i])) {
      newArray.push(input[i]);
      }
    }
    return newArray;
}
module.exports = advancedFilter;
