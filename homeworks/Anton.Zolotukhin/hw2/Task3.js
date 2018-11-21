/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    hours = +prompt("Enter hours", "");
    // check the input to be a number. If not, exit the function
	if (typeof hours !== 'number') {
		return;
	} else {
        // if yes, transform hours to seconds
        console.log(hours + " hours = " + hours * 3600 + " seconds");
    }
}

// secondsCount();
module.exports = secondsCount;
