/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
// function advancedFilter(input) {
//     return;
// }

// В функцию передается массив с числами. Функция должна возвращать массив 
// который содержит только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange, которая проверяет,
// что оно больше нуля и меньше 10. Если это так - функция возвращает true, если не так - false.

var arr = [-6,-5,-4,-3,-2,-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,-12];

function advancedFilter(array) {
  var newArr = [];
    for(var i=0; i<array.length; i++){
      if (isNumberInRange(array[i])){
        newArr.push(array[i]);
      }
     }
  return newArr;
  }

function isNumberInRange (number){
    return number<10 && number>0;
}

// to check:
// console.log(advancedFilter(arr));

// module.exports = advancedFilter;
