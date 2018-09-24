/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
 function stringBuilder(input) {
     var str = '';

     if (typeof input !== "number") {
         return;
     } else if (input >= 1) {
         for (var i = 1; i < input; i++) {
             str += i + ", ";
         }
     } else {
         for (var i = 1; i > input; i--) {
             str += i + ", ";
         }
     }
     return (str + input);
 };

module.exports = stringBuilder;
