/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {

    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 3 === 0 || input[i] % 5 === 0 || input[i] % 7 === 0) {
            newArray.push(input[i]);
        }
    }

    return newArray;
};

console.log(advancedFilter([5, 2, 5, 7, 5, 3, 2, 72, 95, 101]));

module.exports = advancedFilter;
