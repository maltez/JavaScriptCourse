// var a = 'потоп';
// var result = a.split('').reverse().join('');
// var j = a === result;
// alert(j);
/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
	var a = input;
	var result = a.split('').reverse().join('');
	var j = a === result;
	alert(j);
	    return;
}

module.exports = isPolindrome;