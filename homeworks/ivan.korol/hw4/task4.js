/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    let result = 0;
    if (!Array.isArray(input)) {
        throw new Error('Error');
    }
    if (order) {
        result = input.reduce((prevItem, curItem) => {
            if (prevItem < curItem) {
                prevItem = curItem;
            }
            return prevItem;
        });
    } else {
        result = input.reduce((prevItem, curItem) => {
            if (prevItem > curItem) {
                prevItem = curItem;
            }
            return prevItem;
        });
    }
    return result;
};

module.exports = maxMin;
