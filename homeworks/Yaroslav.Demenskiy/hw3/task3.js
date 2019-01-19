/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        if (input[inputLength - i - 1] === input[i]) {
            if (i + 1 === inputLength) {
                return true;
            }
        } else {
            return false;
        }
    }
}

console.log(isPolindrome('txt'));

module.exports = isPolindrome;