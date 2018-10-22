/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

    if (!array1 || !array2) {
        return false;
    }
    else if (!array1.length || !array2.length) {
        return false;
    }


    var isSquare = false;
    var squareValue;

    for (var i2 = 0; i2 < array2.length; i2 += 1) {
        isSquare = false;
        for (var i1 = 0; i1 < array1.length; i1 += 1) {
            squareValue = array1[i1] * array1[i1];
            if (array2[i2] === squareValue) {
                isSquare = true;
                break;
            }
        }
        if (!isSquare) {
            return isSquare;
        }
    }

    return isSquare;
}

module.exports = comp;


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
