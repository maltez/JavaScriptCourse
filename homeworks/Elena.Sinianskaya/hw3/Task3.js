/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
// function isPolindrome(input) {
//     return;
// }

function isPolindrome(input) {
    input = input.toLowerCase().replace(/ /g, " "); //.replace()- delete spaces and ','
    return input.split(" ").reverse().join(" ")==input; //don't need here ".toLowerCase() and .replace(/ /g, '') anymore,
     //because it's have already applied rewritten in 'input'
   }
      
module.exports = isPolindrome;
