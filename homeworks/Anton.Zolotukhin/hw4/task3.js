/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    var filter = input.filter(function(number) {
        if (number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
            return number
        }
    });
    console.log(filter);
};

var input = [15, 5, 7, -8, 25, 9, 49, -11, 33, 1, 3, 50, 18, 77];

// advancedFilter(input);

module.exports = advancedFilter;
