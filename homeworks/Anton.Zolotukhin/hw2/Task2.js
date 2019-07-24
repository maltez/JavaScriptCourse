/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
	if (typeof minute !== 'number' || minute < 0 && minute > 59) {
		return;
	} else if (minute > 0 && minute <= 15) {
		return minute + " is in the 1st quarter";
	} else if (minute > 15 && minute <= 30) {
		return minute + " is in the 2nd quarter";
	} else if (minute > 30 && minute <= 45) {
		return minute + " is in the 3rd quarter";
	} else {
		return minute + " is in the 4th quarter";
	}
}

module.exports = hourQuoter;