/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPolindrome(input) {
    const arrPolondrome = input.toLowerCase().split('');

    if (typeof (input) !== 'string') {
        throw new TypeError('invalid value');
    }

    for (let i = 0; i < arrPolondrome.length; i += 1) {
        return arrPolondrome[i] === arrPolondrome[arrPolondrome.length - i - 1];
    }
    return true;
}

module.exports = isPolindrome;
