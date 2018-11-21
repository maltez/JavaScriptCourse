/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
	minute = +prompt("Enter minutes", "");
	// check the input to be a number between 0 and 59. If not, exit the function
	if (typeof minute !== 'number' || minute < 0 || minute > 59) {
		return;
		// if yes, output quarter based on the entered value
	} else if (minute > 0 && minute <= 15) {
		console.log(minute + " is in the 1st quarter");
	} else if (minute > 15 && minute <= 30) {
		console.log(minute + " is in the 2nd quarter");
	} else if (minute > 30 && minute <= 45) {
		console.log(minute + " is in the 3rd quarter");
	} else {
		console.log(minute + " is in the 4th quarter");
	}
}

// hourQuoter();
module.exports = hourQuoter;