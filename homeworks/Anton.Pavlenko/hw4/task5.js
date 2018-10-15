/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    var count = 0;
    var output = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]===0){
            count++;
            continue;
        }
        output.push(arr[i])
    }
    for(var i=0;i<count;i++){
        output.push(0);
    }
    return output;
}
var arrNum=[3,-6,0,7,23,0,49,0,8,5,335,0,5,0,0,675];
console.log(moveZeros(arrNum));
module.exports = moveZeros;
