/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPolindrome(input) {
    input = input.replace(/ /g,""); // https://learn.javascript.ru/regexp-methods 

    for (var i = 0; i < (input.length/2); i++) {
        if (input[i] != input[input.length - 1 - i]) {
            return false; 
        }
    }
    return true;   
}
alert(isPolindrome("1 23 43 21"));



module.exports = isPolindrome;
