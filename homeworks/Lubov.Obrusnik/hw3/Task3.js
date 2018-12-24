/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(str) {
    var result = str.toUpperCase().split(' ').join('').split('').reverse().join('');
    return result === str.toUpperCase().split(' ').join('');
}
// console.log(isPolindrome('ghg  g h g'));
module.exports = isPolindrome;