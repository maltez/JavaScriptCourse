/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var newArray = [];
    function isNumberInRange(i) {
    if (i > 0) {
      return true;
    }else{
      return false;
    };
    for(i > 0; i < 10; i++) {
      if(isNumberInRange(i) == true) {
        newArray.push(i);
      }
    }
    return newArray;
}
module.exports = advancedFilter;
