/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {

    let inputReverse = input.split("").reverse().join("");

    if (inputReverse == input) {
        return true;
    }

    else {
        return false;
    }
}

module.exports = isPolindrome;
