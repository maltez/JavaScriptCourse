/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var newInput = input.toLowerCase();
    var inputReverse = newInput.split('').reverse().join('');

    return newInput === inputReverse ? true : false;
}

module.exports = isPolindrome;
