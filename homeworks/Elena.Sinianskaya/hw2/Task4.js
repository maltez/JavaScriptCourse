/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
// Функция принимает количество часов (проверить что это число).
// Функция возвращает количество секунд в переданых часах.
//  _____start_____ Вариант-1
// function isDevided(first, second) {
//   if (typeof first === "number" && typeof second === "number"){
//      if (first%second === 0){
//        return true;
//     }
//     else {
//        return false;
//     }
//   }
//   else {
//     return("Not a number! Please, wright a number");
//   }
// }
//  _____finish_____

// Вариант-2
function isDevided(first, second) {
  if (typeof first === "number" && typeof second === "number" && first%second === 0 ){
        return true;
    }
    else {
       return false;
    }
  }
 
console.log(isDevided(11, 2));


module.exports = isDevided;
