/**
 * Return the highest number if second paraameter is true and the lowest
 * number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    const result = input.reduce((acc, current) => {
        if (order === true) {
            return (acc > current) ? acc : current;
        }
        return (acc > current) ? current : acc;
    }, 0);
    return result;
};

module.exports = maxMin;
