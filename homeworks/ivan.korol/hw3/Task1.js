/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(input) {
    var newArray = [];

    for(var i = 0; i < arr.length; i++) {
    
        if(isPositive(input[i])) {
            newArray.push(input[i]);
        }
    }

    return newArray;
}

function isPositive(num) {
    return num >= 0 ? true : false;
}

module.exports = negativeFilter;
