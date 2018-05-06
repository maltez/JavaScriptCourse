/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

var input = 'А Роза упалА на лапу азора';
function isPolindrome(inputs) {
    var str = inputs.split(',').splice(' ').join('').replace(/\s/g, '').toLowerCase();
    var strReverse = str.split('').reverse().join('').toLowerCase();

    return strReverse === str;
}

isPolindrome(input);

module.exports = isPolindrome;

