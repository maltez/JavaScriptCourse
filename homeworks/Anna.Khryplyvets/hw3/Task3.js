/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

var input = 'А Роза упалА на лапу азора';
function isPolindrome(inputs) {
    var str = inputs.split(',').splice(' ').join('').replace(/\s/g, '');
    var str2 = str.toLowerCase();
    var strReverse = str2.split('').reverse().join('');
    var strReverse2 = strReverse.toLowerCase();

    return strReverse2 === str2;
}

isPolindrome(input);

module.exports = isPolindrome;

