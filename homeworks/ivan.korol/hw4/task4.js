/**
 * Return the highest number if
 * second paraameter is true and
 * the lowest number if parameter is false.
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
            const currentItem = curItem;
            let previosItem = prevItem;
            if (previosItem < currentItem) {
                previosItem = currentItem;
            }
            return previosItem;
        });
    } else {
        result = input.reduce((prevItem, curItem) => {
            const currentItem2 = curItem;
            let previosItem2 = prevItem;
            if (previosItem2 > currentItem2) {
                previosItem2 = currentItem2;
            }
            return previosItem2;
        });
    }
    return result;
};

module.exports = maxMin;
