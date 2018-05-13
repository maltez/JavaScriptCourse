/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


function negativeFilter(input) {
    var result = [];

    function isPositive(massdata) {
        return (massdata >= 0);
    }
    for (var i = 0; i < input.length; i++) {
        if (isPositive(input[i])) {
            result.push(input[i]);
        }
    }
    return result;
}
console.log(negativeFilter([6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,0]));



module.exports = negativeFilter;
