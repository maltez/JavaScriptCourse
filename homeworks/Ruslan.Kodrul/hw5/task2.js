/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

    var booleanVariable = true;

    for (var i = 0; i < array1.lenght; i += 1){
        for (var k = 0; k < array2.lenght; k += 1){
            
        }
    }

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

module.exports = comp;