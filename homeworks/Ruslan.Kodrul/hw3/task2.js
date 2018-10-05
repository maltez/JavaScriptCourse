/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {

    var filteredArray = [];

    for ( var i = 0; i < input.length; i +=1){
        if (input[i] > 0 && input[i] < 10 ){
            filteredArray.push(input[i]);
        } else {
            continue;
        }
    }
    return filteredArray;
}

module.exports = advancedFilter;