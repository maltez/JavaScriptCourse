/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
    return 'Please, put numbers only.';

  if ((num1 <= 0) || (num2 <=0))
    return 'Please, put a value bigger than 0.';

  let dev1;
  let dev2;

  // здесь определяю, чтобы всегда одна конкретная переменная была меньше, а другая больше,
  // не зависимо от того, в каком порядке это указано
  if (num1 < num2){
    dev1 = num1;
    dev2 = num2;
  } else {
    dev1 = num2;
    dev2 = num1;
  }

  if (dev2 % dev1 === 0){
    return 'The greatest common divisor is: ' + dev1
  } else {
    for (dev1; dev1 > 0; dev1--){

      // здесь проверяются оба числа на деление без остатка на меньшее,
      // если большее не делится на меньшее без остатка сразу
      if (!(dev1 % (dev1 - 1)) && !(dev2 % (dev1 - 1))) {
        return 'The greatest common divisor is: ' + (dev1-1)
      }

    }
  }
};

console.log(commonDevisor(7, 23));


// var gcd = function(a, b) {
//   if ( ! b) {
//     return a;
//   }
//
//   return gcd(b, a % b);
// };
//
// console.log(gcd(11, 30));

module.exports = commonDevisor;
