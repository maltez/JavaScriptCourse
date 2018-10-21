/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

var str = 'english';
var str1 = 'level';

console.log(isPolindrome(str));
console.log(isPolindrome(str1));

function isPolindrome(input) {
    var arr  = input.split('');
    var arrR = arr.reverse().join('');
    
    return input === arrR;
}

module.exports = isPolindrome;
