/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    
    const arr = input.filter(function(number){
        return number % 3 == 0 || number % 5 == 0 || number % 7 == 0; 
});
    return arr;
};

console.log(advancedFilter([-14,49,21,63,8]));
module.exports = advancedFilter;