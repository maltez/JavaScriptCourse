/**
 * Return the highest number if second paraameter
 * is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    let result;

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    } else if (order) {
        result = Math.max(...input);
    } else {
        result = Math.min(...input);
    }

    return result;
};

module.exports = maxMin;
