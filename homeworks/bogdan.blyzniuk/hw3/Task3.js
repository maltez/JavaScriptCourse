/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {

    input = input.toLowerCase().replace(/ /g, '');
    var strLen = input.length,
        strReverse = input.split('').reverse().join(''); 
    if (strReverse == input) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isPolindrome('abcdedcba'));
  console.log(isPolindrome('А роза упала на лапу Азора'));
  console.log(isPolindrome('А роза лапу Азора'));

module.exports = isPolindrome;
