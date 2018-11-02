/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {

    let arr = [];

    let newArr = arr.filter (function isNumberinRange(number){

        if (number > 0 && number < 10) {
            return newArr;
        }

        else {
            return "Error";
        }

        return newArr;
    });
};

module.exports = advancedFilter;
