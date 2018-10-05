/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var newInput = input.toLowerCase()
    var splitArr = newInput.split('').reverse().join('');
    if (newInput === splitArr) {
        return true
    } else {
        return false
    }
}

module.exports = isPolindrome;
