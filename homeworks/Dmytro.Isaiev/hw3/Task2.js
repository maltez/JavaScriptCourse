/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {

    if (!Array.isArray(input)) {

        return 'data is not valid';
    }

    function isNumberInRange(massdata) {

        return (massdata > 0 && massdata < 10)
    }
    var result = [];
    
    for (var i = 0; i < input.length; i++) {

        if (isNumberInRange(input[i]) === true) {
            result.push(input[i]);
        }
    }
    return result;
}

console.log(advancedFilter("1, 2, 3, 11, 22, 33, 44 ,50"));




module.exports = advancedFilter;
