/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    var arr = [];
    for (var i = 0; i < input.length; i += 1) {
        if (input[i] % 3 === 0 || input[i] % 5 === 0 || input[i] % 7 === 0) {
            arr.push(input[i])
        }
    } return arr
};

module.exports = advancedFilter;
