/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {

    let filteredNumbers = [];

    for (let i = 0; i < input.length; i++) {
        if (isNumberInRange(input[i])) {
            filteredNumbers += input[i];
        }
    }

    if (filteredNumbers.length > 0) {
        return filteredNumbers;
    } else {
        return 'No matching numbers.';
    }

}

function isNumberInRange(number) {
    return number > 0 && number < 10 ? true : false;
}

console.log(advancedFilter([1, 100, 2, 200, 3, 300]));

module.exports = advancedFilter;