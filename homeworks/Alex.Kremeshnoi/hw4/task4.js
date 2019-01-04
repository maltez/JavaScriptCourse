/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    if (order === true) {
        return Math.max(...input);
    } else if (order === false) {
        return Math.min(...input);
    }
};

module.exports = maxMin;
