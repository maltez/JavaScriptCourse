/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(str) {
    var result = str.toUpperCase().split('').reverse().join('');
    var result1 = result === str.toUpperCase();
    return result1;
}
// console.log(isPolindrome('Lol'));
module.exports = isPolindrome;