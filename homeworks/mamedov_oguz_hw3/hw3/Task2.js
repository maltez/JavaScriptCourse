/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
 function advancedFilter(input) {
    function isNumberInRange(num) {
        return num > 0 && num < 10;
    }
    
   
 };

module.exports = advancedFilter;
