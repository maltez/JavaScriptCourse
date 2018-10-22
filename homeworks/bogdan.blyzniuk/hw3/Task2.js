/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */




function advancedFilter(input) {
    
    var newArr = input.filter (function (number) {

        return number > 0 && number < 10;
    });
    return newArr;
}

console.log(advancedFilter([1,2,-3, -1, -3, 11, 12, 5,10]));

module.exports = advancedFilter;
