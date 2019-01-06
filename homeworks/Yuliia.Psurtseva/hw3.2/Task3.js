/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var word1 = input.toLowerCase().replace(/\s/g, ''); 
    var word2 = input.toLowerCase().replace(/\s/g, '').split("").reverse().join("");
    return word1 == word2 ? true : false;
}
console.log(isPolindrome('zaaz'))
module.exports = isPolindrome;