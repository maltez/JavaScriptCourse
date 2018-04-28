/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    if (typeof input !== 'string') return;

    const str = input.split(' ').join('').toLowerCase();
    const len = str.length;

    for (let i = 0; i < len; i += 1) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPolindrome;
