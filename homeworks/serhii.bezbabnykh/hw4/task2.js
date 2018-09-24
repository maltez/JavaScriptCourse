/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    let a = num1;
    let b = num2;
    function commonDevisor() {
        while (a !== 0 && b !== 0) {
            if (a > b) {
                a %= b;
            } else {
                b %= a;
            }
        }

        const divider = a + b;

        return divider;
    }

    const multiple = (a * b) / commonDevisor(a, b);

    return multiple;
};

module.exports = lowestMultiple;
