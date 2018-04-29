/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    var arr = [1, 2, 3, 4, 5,6, 7, 8,9, -1, -2, -3, -10];
    var positiveArr = arr.filter(function(number) {
        return number > 0 ; 

    });
    console.log(positiveArr);
};

module.exports = negativeFilter;