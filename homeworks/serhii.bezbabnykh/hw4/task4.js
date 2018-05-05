/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let min = 0;
    let max = min;

    for (let i = 0; i < input.length; i += 1) {
        if (input[i] > max) max = input[i];
        if (input[i] < min) min = input[i];
    }

    const result = order === true ? max : min;

    return result;
};

module.exports = maxMin;
