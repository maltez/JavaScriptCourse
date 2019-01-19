/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {

    let positiveNumbers = []; 

    for (let i = 0; i < input.length; i++) {
        if (isPositive(input[i])) {
            positiveNumbers.push(input[i]);  
        }
    }

    if (positiveNumbers.length > 0) {
        return positiveNumbers;
    } else {
        return 'No matching numbers.';
    }

}

function isPositive(number) {
    return number > 0 ? true : false;
}

console.log(negativeFilter([-1, 1, -2, 2, -3, 3]));

module.exports = negativeFilter;