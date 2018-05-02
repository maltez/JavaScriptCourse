/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


// function negativeFilter(input) {
//     return;
// }

// let array = [1, 2, 3, 4, 5, -5, -4, -3, -2, -1];

function negativeFilter ( array ) {
    let newArr = [];
    for ( let i = 0; i < array.length; i++ ){
        if ( isPositive ( array[i] ) ) {
            newArr.push ( array[i] );
        }
      }
   return newArr;
 }
  
 function isPositive ( number ) {
   return number > 0;
 }
 

// module.exports = negativeFilter;
