/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {

    let i;
    let result = [];

for (i = 0; i < input.length; i++) {

    if ((input[i] % 3 === 0) || (input[i] % 5 === 0) || (input[i] % 7 === 0)) {
        
        result.push(input[i]);
    }
}
    return result;
};

console.log(advancedFilter([3, -2, 5, 1, 2, 88, 40, 70]));

module.exports = advancedFilter;
