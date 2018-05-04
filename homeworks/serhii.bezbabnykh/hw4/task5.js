/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    let numberArr = arr.filter(function (number) {
        return number !== 0;
    });

    let zeroArr = arr.filter(function (number) {
        return number === 0;
    });

    let newArr = numberArr.concat(zeroArr); 
    
    return newArr;
}

module.exports = moveZeros;

