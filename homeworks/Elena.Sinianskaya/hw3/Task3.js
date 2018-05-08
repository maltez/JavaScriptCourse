/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPalindrome(str) {
    const strReverse = str.split('').reverse().join('');
    return (strReverse === str);
}

module.exports = isPalindrome;
