/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    var positiveArray = [];
    function isPositive() {
        if (input[i] >= 0) {
            return true;
        } else {
            return false;
        }
    }
    for (var i = 0; i <= input.length; i++) {
        if (isPositive(i)) {
            positiveArray.push(input[i]); 
        }
    }
    // console.log(positiveArray)
    return positiveArray;
}
    
module.exports = negativeFilter;