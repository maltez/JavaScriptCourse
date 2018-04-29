/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


// function negativeFilter(input) {
//     return;
// }

// В функцию передается массив с числами. 
// Функция должна возвращать из него новый массив,
// где останутся лежать только положительные числа.
// Создайте для этого вспомогательную функцию isPositive(), 
// которая параметром будет принимать число и возвращать true,
// если число положительное, и false если отрицательное.

var arr = [1, 2, 3, 4, 5, -5, -4, -3, -2, -1];

function negativeFilter(array){
    var newArr=[];
    for (var i=0; i<array.length;i++){
        if(isPositive(array[i])){
            newArr.push (array[i]);
        }
      }
   return newArr;
 }
  
 function isPositive (number) {
   return number > 0;
 }
 
// to check:
//  console.log (negativeFilter(arr));

// module.exports = negativeFilter;
