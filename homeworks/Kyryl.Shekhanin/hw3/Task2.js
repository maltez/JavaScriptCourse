/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var ResultArray = [];
    for (let i = 0; i < input.length; i += 1) {
        if (typeof input[i] === 'number') {
            if (input[i] > 0 && input[i] < 10) {
                ResultArray.push(input[i]);
            }
        }
    }
    return ResultArray;
}

console.log(advancedFilter([1, 2, 'her', -2, 100, 9, 10]));
module.exports = advancedFilter;
