/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPolindrome(input) {
    input = input.replace(/ /g,"").toLowerCase();

    for (var i = 0; i < (input.length/2); i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false; 
        }
    }
    return true;
}
console.log(isPolindrome("А розА упалА на лапу азора"));



module.exports = isPolindrome;
