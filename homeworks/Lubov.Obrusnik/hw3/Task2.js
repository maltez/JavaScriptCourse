/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(arr) {
    var mas2 = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0 && arr[i] < 10) {
            mas2.push(arr[i]);
        }
    }
    return mas2;
}
// advancedFilter([1, 15, 3, -2, 8]);
module.exports = advancedFilter;