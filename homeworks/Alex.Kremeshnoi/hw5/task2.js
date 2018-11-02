/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    for (let i = 0; i < array2.length; i +=1) {
        var sqrt;
        var bool = false;
        for(let j = 0; j < array1.length; j +=1) {
            sqrt = array1[j]**2;
            console.log(sqrt)
            if (sqrt === array2[i]) {
                bool = true;
                break;
            }
        }
        if (!bool) {
            return false
        }
    } return true
} 

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]));

module.exports = comp;
