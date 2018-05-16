/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    let originalWitoutSpaces = input.split(' ').join('');
    let strBack = originalWitoutSpaces.split('').reverse().join('');
    return strBack.toLowerCase() === originalWitoutSpaces.toLowerCase();
} 

module.exports = isPolindrome;
