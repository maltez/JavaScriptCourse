/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {

    let arr = [];
    
    let newArr = arr.filter (function isPositive(number) {

        if (number > 0) {
            return newArr;
        }
        
        else if (number < 0) {
            return "Error";
        }
    
        return newArr;
    });
};


module.exports = negativeFilter;