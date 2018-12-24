/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var sum4 = 0;

if (array1 !== null || array2 !== null) {
    if (array1.length === array2.length) {
        for (var elem = 0; elem < array1.length; elem += 1) {

            sum1 += array1[elem] * array1[elem];
            sum2 += array1[elem];
            sum3 += Math.sqrt(array2[elem]);
            sum4 += array2[elem];
        };
        return sum1 === sum4 && sum2 === sum3;
    }
}
return false;

}
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],
//  [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
module.exports = comp;