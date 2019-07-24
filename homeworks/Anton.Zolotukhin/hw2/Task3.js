/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
	if (typeof hours !== 'number') {
		return;
	} else {
        return `${hours} hours = ${hours * 3600} seconds`;
    }
}

module.exports = secondsCount;
