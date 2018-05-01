
/**
 * Check negative numbers
 * @param {number} num
 * @returns {string} Returns true or false.
 */

function isPositive(num) {
    if(typeof num === 'number' && !isNaN(num)) {
        if(num > 0){
            return num > 0;
        }
        return num > 0; 
    } else {
        return (typeof num === 'number' && !isNaN(num));
    }   
}

/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

var input = [1, -4, 5, 7, -11];

function negativeFilter(input) {
    var arr = [];

    for(var i = 0; i < input.length; i++){
        if(isPositive(input[i])){
            arr.push(input[i]);
        }
    }
    return arr; 
}

negativeFilter();

module.exports = {
    isPositive,
    negativeFilter,
};
