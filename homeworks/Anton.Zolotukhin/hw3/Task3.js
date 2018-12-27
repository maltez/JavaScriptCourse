/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var directOrder = input.replace(/[-'\s]?/g, '').toLowerCase();
    var reverseOrder = directOrder.split('').reverse().join('');

    return directOrder == reverseOrder
}

module.exports = isPolindrome;
