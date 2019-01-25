/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    for(let i = (arr.length - 1); i >= 0; i--){
        if(arr[i] === 0){
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

var arr = [0, 10, 456, 0, 0, 123, 943, 0, 0, 234, 0, 24, 2345, 0, 234, 0];

console.log(moveZeros(arr));

module.exports = moveZeros;
