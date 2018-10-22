/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    for(let index = arr.length - 1, secondIndex = index; index >= 0; index--){
        if(arr[index] == 0){
            let k = index, tmp = arr[index];
            while(k < secondIndex)
                arr[k] = arr[++k];
            arr[secondIndex--] = tmp;
        }
    }
    return arr;
    
}
module.exports = moveZeros;
