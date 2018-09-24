/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    const arr = input;
    
    const newArr = arr.filter (function (num) {
        return (num % 3 === 0 || num % 5 === 0 || num % 7 === 0);
    })
    return newArr;
};

module.exports = advancedFilter;
