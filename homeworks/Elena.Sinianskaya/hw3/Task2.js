/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
// function advancedFilter(input) {
//     return;
// }

// var arr = [-6,-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,-12];

function advancedFilter (array) {
  var newArr = [];
    for( var i = 0; i < array.length; i++ ){
      if ( isNumberInRange ( array[i] ) ){
        newArr.push ( array[i] );
      }
     }
  return newArr;
  }

function isNumberInRange (number){
    return number < 10 && number > 0;
}

// module.exports = advancedFilter;
