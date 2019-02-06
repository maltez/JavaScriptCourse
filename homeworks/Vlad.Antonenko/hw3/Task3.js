/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var strWithText = input.toLowerCase().split(' ').join('');
    var forCompareText = strWithText.split('').reverse().join('');
    return strWithText === forCompareText
}
console.log(isPolindrome('Аргентина манит негра'));

module.exports = isPolindrome;
