/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */
const comp = (array1, array2) => {
    const newArr = array1.map(num => num * num);
    function checkMatches(item) {
        return newArr.includes(item);
    }
    return array2.every(checkMatches);
};
module.exports = comp;
