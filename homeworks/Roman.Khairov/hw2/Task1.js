/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
 function stringBuilder(input) {
     if (typeof input === 'number' && input >= 1) {
         var str = '';

         for (var i = 1; i < input; i++) {
             str += i + ", ";
         }
         return (str + input);
     } else {
         var strMinus = '';

         for (var j = 1; j > input; j--) {
             strMinus += j + ", ";
         }
         return (strMinus + input);
     }
 };

module.exports = stringBuilder;
