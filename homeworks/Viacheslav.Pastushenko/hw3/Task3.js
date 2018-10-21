/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    return input == input.split('').reverse().join('');
}

module.exports = isPolindrome;
