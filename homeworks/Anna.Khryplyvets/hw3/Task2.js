// Check if number > 0 and < 10

function isNumberInRange(num) {
    if(typeof num === 'number' && !isNaN(num)) {
        return (num > 0 && num < 10);
    }
    throw new Error();
};

/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

var input = [1, -4, 5, 7, -11];

function advancedFilter(input) {
    var arr = [];
    for(var i = 0; i < input.length; i++){
        if(isNumberInRange(input[i])){
            arr.push(input[i]);
        }
    } 
    return arr;   
}

advancedFilter(input);

module.exports = advancedFilter;
