/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    if (order == true){
        return 'The biggest common divisor is ' + commonDevisor(input[0], input[1]);
    } else {
        return 'The lowest multiple is ' + lowestMultiple(input[0], input[1]);
    }
}

var input = [8, 36];
maxMin(input, false);

// Auxillary function to calculate the biggest common divisor. Was created in task 1.
function commonDevisor(num1, num2) {
    if (num1 % num2 == 0) {
        return num2;
    } else {
        return commonDevisor(num2, num1 % num2);
    }
};

// lowest common multiple uses the auxillary function (biggest common divisor) in calculations
function lowestMultiple (num1, num2) {
    return num1 * num2 / commonDevisor(num1, num2);
};

module.exports = maxMin;
