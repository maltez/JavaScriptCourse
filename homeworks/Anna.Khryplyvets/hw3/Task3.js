/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
var input = 'атата';
function isPalindrome(input) {
    var str = input;
    var strReverse = input.split('').reverse().join('');
        
    if (strReverse == str) {
      return 'yes';
    } 
    return 'no';
}

isPalindrome();

module.exports = isPolindrome;

