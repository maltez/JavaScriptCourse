/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
// Функция принимает количество часов (проверить что это число).
// Функция возвращает количество секунд в переданых часах.
//  _____start_____
function secondsCount(hours) {
  if (typeof hours === "number"){
    return (hours * 3600);
  }
  else {
    return ("Not a number! Please, wright a number.");
  }
}
// to check:
// console.log (secondsCount(5));
// _____finish____
module.exports = secondsCount;
