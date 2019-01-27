/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {

    let arrZeros = [];
    
		for (let i = arr.length; i >= 0; i--){

			if (arr[i] === 0){
				arrZeros.push( + arr.splice(i, 1));
			}
        }
        
    return arr.concat(arrZeros);
}

module.exports = moveZeros;
