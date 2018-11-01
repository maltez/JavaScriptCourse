/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {

    var positiveArray = [];

    for (var i = 0; i < input.length; i += 1){
        if (input[i] >= 0 ){
            positiveArray.push(input[i]);
        } else {
            continue;
        }
    }
    return positiveArray;
}

module.exports = negativeFilter;
