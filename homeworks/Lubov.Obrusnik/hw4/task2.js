/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    let del = [];
    for (let i = 0; i <= num1; i++) {
        for (let j = 0; j <= num2; j++) {
            if (num1 % i === 0 && num2 % j === 0 && j === i) {
                del.push(i);
            }
        }
    }

    let res = Math.max(...del);
    return (num1 * num2) / res;
};
// console.log(lowestMultiple(10, 8));

module.exports = lowestMultiple;