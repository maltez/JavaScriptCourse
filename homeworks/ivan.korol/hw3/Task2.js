/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    
    if(Array.isArray()) {
        var newArray = [];
        var error = 'invalid type';

        for(var i = 0; i < input.length; i++) {

            if(!Number.isInteger(input[i])) {
                return error;
            }
        
            if(isNumberInRange(input[i])) {
                newArray.push(input[i]);
            }
        }

        return newArray;
    }

    return error;
}

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

module.exports = advancedFilter;
