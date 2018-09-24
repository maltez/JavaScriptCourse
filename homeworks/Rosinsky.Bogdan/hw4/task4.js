/**
 * Return the highest number if second paraameter is true.
 * and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    if (!Array.isArray(input) || typeof order !== 'boolean') {
        throw new Error('incorrect data type');
    }
    let result = input[0];
    if (order) {
        input.forEach((item) => {
            if (item > result) {
                result = item;
            }
        });
    } else {
        input.forEach((item) => {
            if (item < result) {
                result = item;
            }
        });
    }
    return result;
};

module.exports = maxMin;
