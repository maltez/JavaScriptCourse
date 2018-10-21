/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    var newArr = [];
    function devided(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
                newArr.push(arr[i]);
            }
        }
        return (newArr);
    }
    var filteredArr = devided(input);
    return filteredArr;
};

module.exports = advancedFilter;