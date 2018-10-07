/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    return num1 * num2 / commonDevisor(num1, num2);
};


const commonDevisor = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return -1
    }

    num1 = num1 > 0 ? num1 : -num1;
    num2 = num2 > 0 ? num2 : -num2;

    var devisor = 1;
    return devisor = binaryEuclide(num1, num2);

    function binaryEuclide(a, b) {
        if (a && b) {
            if (!(a % 2) && !(b % 2)) {
                devisor *= 2;
                return binaryEuclide(a / 2, b / 2);
            } else if (!(a % 2)) {
                return binaryEuclide(a / 2, b);
            } else if (!(b % 2)) {
                return binaryEuclide(a, b / 2);
            } else if (a >= b) {
                return binaryEuclide(a - b, b);
            } else if (a <= b) {
                return binaryEuclide(a, b - a);
            }
        }
        return devisor * b;
    }
};

var A = Math.random * 1000000;
var B = Math.random * 1000000;

var a = Date.now();
for (var i = 0; i < 1000000; i++) {
    
    lowestMultiple(A,B);

}
var b = Date.now();
console.log(b - a);

module.exports = lowestMultiple;
