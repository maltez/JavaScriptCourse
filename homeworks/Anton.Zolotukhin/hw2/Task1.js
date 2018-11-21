/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
	var string = "";
	input = +prompt("Enter a number", "");
	// check the input to be a number. If not, exit the function
	if (typeof input !== 'number') {
		return;
	} else if (input > 1) {
		// construct a string 1...input for positive input
		for (var i = 1; i <= input; i++) {
			string += i + ",";
		} console.log(string);
	} else {
		// construct a string 1...input for negative input
		for (var i = 1; i >= input; i--) {
			string += i + ",";
		} console.log(string);
	}
};

// stringBuilder();
module.exports = stringBuilder;

