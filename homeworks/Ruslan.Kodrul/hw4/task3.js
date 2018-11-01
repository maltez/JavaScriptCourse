/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {

    var filteredArray = [];

    for (var i = 0; i < input.length; i += 1){
        if (input[i] % 3 === 0){
            input[i] = filteredArray[i];
        } else if (input[i] % 5 === 0){
            input[i] = filteredArray[i];
        } else if (input[i] % 7 === 0){
            input[i] = filteredArray[i];
        } else {
            continue;
        }
    }
    return filteredArray;
};

module.exports = advancedFilter;
