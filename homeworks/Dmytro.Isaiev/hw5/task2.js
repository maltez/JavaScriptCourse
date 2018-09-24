/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

   var i, j; 
   var currentElementSqrt;
   var currentElementSquare;

    if (array1.length != array2.length) {

        return false;
    } 

        for (i = 0; i < array1.length; i++) {

            currentElementSquare = array1[i] * array1[i];
            if (array2.indexOf(currentElementSquare) === -1) {

                return false;
            }
        }

        for (j = 0; j < array2.length; j++) {

            currentElementSqrt = Math.sqrt(array2[j]);
            if (array1.indexOf(currentElementSqrt) === -1) {

                return false;
            }
        }

        return true;
}

console.log( comp( [121, 144, 19, 161, 19, 144, 19, 11] , [121, 14641, 20736, 30361, 25921, 361, 20736, 361] ) );

module.exports = comp;
