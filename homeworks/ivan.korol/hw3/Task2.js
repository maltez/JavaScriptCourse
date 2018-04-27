/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var newArray = [];

    for(var i = 0; i < input.length; i++) {
    
        if(isNumberInRange(input[i])) {
            newArray.push(input[i]);
        }
    }

    return newArray;
}

function isNumberInRange(num) {
    return num > 0 && num < 10 ? true : false;
}

module.exports = advancedFilter;
