/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

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

console.log(commonDevisor(56, 80));
module.exports = commonDevisor;