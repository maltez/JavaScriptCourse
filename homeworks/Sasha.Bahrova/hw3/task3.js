/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
  if (typeof (input) !== 'string' || typeof(input) == '') {
      return;
  };
    let newArr = input.toLowerCase().split('');
    let strBack = newArr.reverse().join('');
    if (strBack === newArr){
    return true;
    }
}

module.exports = isPolindrome;
