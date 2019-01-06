/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(input) {
    var result = [];
    
    const isPositive = input.filter(function(number){
        return number >= 0;
});
    return result + isPositive;
}

console.log(negativeFilter([1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,0]));
module.exports = negativeFilter;
