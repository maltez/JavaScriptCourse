/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    
    var newArr = input.filter (function (number) {

        return number > 0 ;
    });
    return newArr;
}

console.log(negativeFilter([1,2,-3, -1, -3, 11, 12, 5,10]));

module.exports = negativeFilter;




