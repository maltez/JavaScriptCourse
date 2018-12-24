/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    let res = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 3 === 0 || input[i] % 5 === 0 || input[i] % 7 === 0) {
            res.push(input[i]);
        }
    }
    return res;
};
// console.log(advancedFilter([35, 17, 49, 2, 6, 111]));
module.exports = advancedFilter;