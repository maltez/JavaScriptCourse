/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var newInput;
    var inputReverse;

    if (Number.isInteger(input)) {
		input = input.toString();
	}

    newInput = input.toLowerCase().replace(/\s/g, '');
    inputReverse = newInput.split('').reverse().join('');

    return newInput === inputReverse;
}

module.exports = isPolindrome;
