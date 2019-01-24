/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */


 const advancedFilter = (input) => {
var newArray = [];
    for(i = 0; i < input.length; i++) {
        if(typeof(input[i]) === 'number') {
        if((input[i] % 3  && input[i] % 5 ) === 0 || input[i] % 7 == 0  ) {
            newArray.push(input[i]);
        }
    }
    }
    return newArray;
};


console.log(advancedFilter([ 0, 2, 3, 4, 5, -7, 14, 28, 15, 30, 45, 49]));

//module.exports = advancedFilter;