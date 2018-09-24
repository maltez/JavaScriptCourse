/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

function comp(array1, array2) {
    const arr = array1.map(num => num * num);
    const arr2 = [];

    if (array1.length === 0 || array2.length === 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (array2.includes(arr[i])) {
            const index = array2.indexOf(arr[i]);
            arr2.push(true);
            array2.splice(index, 1);
        } else {
            arr2.push(false);
        }
    }
    return arr2.includes(true);
}

module.exports = comp;
