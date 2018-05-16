/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    const newInput = input.toString().toLowerCase().replace(/\s/g, '');
    const inputReverse = newInput.split('').reverse().join('');
    return newInput === inputReverse;
}

module.exports = isPolindrome;