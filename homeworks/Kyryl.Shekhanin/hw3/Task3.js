/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    if (typeof input === 'string') {
        var tmpStr = input.toLowerCase();
        var tmpArray = tmpStr.split('');
        var tmpRevArray = tmpArray.slice();
        tmpRevArray.reverse();
        for (let i = 0; i < tmpArray.length; i += 1) {
            if (tmpArray[i] !== tmpRevArray[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(isPolindrome("abba"));
console.log(isPolindrome("sdfghj"));
console.log(isPolindrome(123));
module.exports = isPolindrome;
