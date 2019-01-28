/**
 * Specifies a positive number or a negative
 * @param {number} number
 * @returns {boolean} Returns true if number is above or equal to 0. Returns false if number is below 0;
 * 
 */
function isPositive(number){
    if(typeof number !== 'number'){
        return false;
    } else {
        return number >= 0 ? true : false;
    }
}

/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 * 
 *
 */

function negativeFilter(input) {
    let resultArr = [];
    for(let i = 0; i < input.length; i++){
        if(!isPositive(input[i])){
            continue;
        } else{
            resultArr.push(input[i]);
        }
    }
    return resultArr;
}
let arr = [-3, 'some', 0, 10, 'keke', 100, -800, -34, 56, 97, 11, 'word', undefined, null, 'i dont know what else i should add', false, true];

console.log(negativeFilter(arr));

module.exports = negativeFilter;
