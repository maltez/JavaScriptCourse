/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    var output=[];
    for (var i=0;i<input.length;i++){
        if(input[i]%3===0|| input[i]%5===0||input[i]%7===0){
            output.push(input[i]);
        }
    }
    return output;
};
var arrNum=[3,-6,34,7,23,25,49,56,8,5,335];
console.log(advancedFilter(arrNum));
module.exports = advancedFilter;
