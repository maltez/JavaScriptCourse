/**
 * Return the highest number if second paraameter is true and the lowest
 * number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    const result = input.reduce (function (sum, current) {
        if (order === true) {
            return (sum > current) ? sum : current;
        } else {
            return (sum > current) ? current : sum;
        }
    }, 0);
    return result;
};

module.exports = maxMin;
