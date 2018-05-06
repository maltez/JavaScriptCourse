
// Check negative numbers

function isPositive(num) {
    if(typeof num === 'number' && !isNaN(num)) {
        return num >= 0;
    }
    throw new Error();
};

/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

var input = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,0];

function negativeFilter(input) {
    var arr = [];

    for(var i = 0; i < input.length; i++){
        if(isPositive(input[i])){
            arr.push(input[i]);
        }
    }
    return arr; 
}

negativeFilter(input);

module.exports = negativeFilter;