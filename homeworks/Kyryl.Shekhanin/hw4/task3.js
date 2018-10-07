/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input, filterArray = [3, 5, 7]) => {
    var resultArray = [];

    for (var i = 0; i < input.length; i += 1) {
        for (var filterArrayIndex = 0; filterArrayIndex < filterArray.length; filterArrayIndex += 1) {
            if (!(input[i] % filterArray[filterArrayIndex])) {
                resultArray.push(input[i]);
                break;
            }
        }
    }
    return resultArray;
};


console.log(advancedFilter([11, 42, 52, 2, 1, 3, 5, 21, 25]));
module.exports = advancedFilter;
