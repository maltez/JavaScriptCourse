/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var inputString;
    var inputStringReverse;

    inputString = input.toLowerCase();
    
    inputString = inputString.replace(/\,| |\!|\./g, "");

    inputStringReverse = inputString.split('');
    inputStringReverse = inputStringReverse.reverse();
    inputStringReverse = inputStringReverse.join('');

    var result = inputString != inputStringReverse ? false : true;

    return result;
}

module.exports = isPolindrome;
