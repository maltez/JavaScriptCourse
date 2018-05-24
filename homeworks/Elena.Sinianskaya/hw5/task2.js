/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    const squareItem = array2.map((item) => {
        const square = Math.sqrt(item);
        return square;
    });
    for (let b = 0; b < array1.length; b += 1) {
        return squareItem.includes(array1[b]);
    }
    return squareItem;
};

module.exports = comp;
