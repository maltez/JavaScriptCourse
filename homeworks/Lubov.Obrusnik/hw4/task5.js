/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
var moveZeros = function (arr) {

    for(var i=0; i < arr.length; i++){
        if(arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1);
    
        }
    }
    return arr;
};

// console.log(moveZeros([0, 1, 0, 8, 0, 87, 4]));
module.exports = moveZeros;
