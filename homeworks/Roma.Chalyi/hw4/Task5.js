/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */


const moveZeros = function (arr) {
    var a = [];
    var b = [];

    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            a.push(arr[i]);
        }
        if(arr[i] === 0 ){
            b.push(arr[i]);
        }
    }
   c =  a.concat(b);

    return c;
}

console.log(moveZeros([0, 0, -346575, 14, 25,  0, 0, 0, 0, 15, 5]));

//module.exports = moveZeros;
