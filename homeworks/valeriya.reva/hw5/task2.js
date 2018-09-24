/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2) || !array1 || !array2) {
        return false;
    }

    let result = true;
    let i = array2.length - 1;

    while (result === true && i > 0) {
        result = array1.includes(Math.sqrt(array2[i]));
        i -= 1;
    }
    return result;
};

module.exports = comp;
