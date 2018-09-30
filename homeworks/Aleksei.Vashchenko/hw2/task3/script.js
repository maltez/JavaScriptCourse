// var a = 12;
// if (isNaN(a)) {
// 	alert('Do not write this');
// }
// else {
// 	var b;
// 	b = a * 3600;
// 	alert(b + ' sec');
// }

/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
var a = hours;
if (isNaN(a)) {
	alert('Do not write this');
}
else {
	var b;
	b = a * 3600;
	alert(b + ' sec');
}
    return;
}

module.exports = secondsCount;



