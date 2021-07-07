/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var resArr = [];
    function isNumberInRange() {
        if (input[i] > 0 && input[i] < 10) {
            return true;
        } else {
            return false;
        }
    }
    for (var i = 0; i <= input.length; i++) {
        if (isNumberInRange(i)) {
            resArr.push(input[i]);
        }
    } 
    return resArr;
}

module.exports = advancedFilter;