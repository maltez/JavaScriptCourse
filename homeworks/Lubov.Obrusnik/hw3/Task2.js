/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

function advancedFilter(arr) {

    var masResult = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && isNumberInRange(arr[i])) {
            masResult.push(arr[i]);
        }
    }
    return masResult;
}
console.log(advancedFilter([1, 15, 'lol', -2, 8]));
// module.exports = advancedFilter;