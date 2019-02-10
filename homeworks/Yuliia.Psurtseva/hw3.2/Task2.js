/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var result = [];
    
    const isNumberInRange = input.filter(function(number){
        return number > 0 && number < 10;
});
    return result + isNumberInRange;
}

console.log(advancedFilter([1,2,3,4,5,6,7,8,9,0,-1,12,45,-6]));
module.exports = advancedFilter;