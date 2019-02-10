/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    let zeroArr = [];
    for(let i=1; i<arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
            arr.splice(i--,1);
        }
    }
    return arr.concat(zeroArr);
}

console.log(moveZeros([{},"zzjz",0,1,0,true,0,[],0,1]))
module.exports = moveZeros;
