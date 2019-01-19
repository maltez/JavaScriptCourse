/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
  let inputForCompare = input
    .toLowerCase()
    .split(' ')
    .join('');
  let reverseStr = inputForCompare
    .split()
    .reverse()
    .join('');
  return inputForCompare === reverseStr;
}
console.log(isPolindrome('а роза упала на лапу Азора'));

module.exports = isPolindrome;
