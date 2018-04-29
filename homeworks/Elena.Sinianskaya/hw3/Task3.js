/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

// - В википедии прочитать что такое полиндромы.
//  Функция должна принимать строку и выдавать true если строка
//  является полндромом и false если она таковой не является.
//  Игнорировать большие и малые буквы.

// function isPolindrome(input) {
//     return;
// }

function isPolindrome(input) {
    //'input =' - syntax
    input = input.toLowerCase().replace(/ /g, ''); //.replace()- delete spaces and ','
    return input.split('').reverse().join('')==input; //don't need here ".toLowerCase() and .replace(/ /g, '') anymore,
     //because it's have already applied rewritten in 'input'
   }
      
//    to check:
//    console.log(isPolindrome('dcdgd'));
   
module.exports = isPolindrome;
