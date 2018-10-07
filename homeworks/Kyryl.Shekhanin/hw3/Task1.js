/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function isPositive(num) {
    return num > 0 ? true : false;
}

function negativeFilter(input) {
    var ResultArray = [];
    for (let i = 0; i < input.length; i += 1) {
        if (typeof input[i] === 'number') {
            if (isPositive(input[i])) {
                ResultArray.push(input[i]);
            }
        }
    }
    return ResultArray;
}


console.log(negativeFilter([1,2,'her']));
module.exports = negativeFilter;
