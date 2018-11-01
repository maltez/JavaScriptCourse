/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

    var firstArrayToSquare = array1.map(num => num * num);
    var checkedArray = [];

    if (array1.length === 0 || array2.length === 0) {
        return false;
    }

    for (var i = 0; i < firstArrayToSquare.length; i += 1) {
        if (array2.includes(firstArrayToSquare[i])) {
            const index = array2.indexOf(firstArrayToSquare[i]);
            checkedArray.push(true);
            array2.splice(index, 1);
        } else {
            checkedArray.push(false);
        }
    }

    return checkedArray.includes(true);

}

module.exports = comp;
