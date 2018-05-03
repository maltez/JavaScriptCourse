/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
// function advancedFilter(input) {
//     return;
// }


function advancedFilter (array) {
  let newArr = [];
  
  function isNumberInRange (number){
    return number < 10 && number > 0;
  }
  
    for( let i = 0; i < array.length; i += 1 ){
      if ( isNumberInRange ( array[i] ) ){
        newArr.push ( array[i] );
      }
     }
  return newArr;
  }

// module.exports = advancedFilter;
