/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} arr
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    console.log("array before modifications: ", arr)
    for (var i = arr.length-1; i >=0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    } console.log("array after modifications", arr);
};

var arr = [2, 5, 0, 5, 0, 0, 1, 33, 0, -3, -8, 77];

// moveZeros(arr);

module.exports = moveZeros;
