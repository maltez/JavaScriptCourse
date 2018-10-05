/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    var ResultArray = [];
    for (let i = 0; i < input.length; i += 1) {
        if (typeof input[i] === 'number') {
            if (input[i] > 0) {
                ResultArray.push(input[i]);
            }
        }
    }
    return ResultArray;
}


console.log(negativeFilter([1,2,'her']));
module.exports = negativeFilter;
