// var a=15;
// if (isNaN(a)) {
// 	alert('You write not correct number');
// }
// else {
// 	if (a>=0 && a<=15) {
// 	alert('First quoter');
// }
// else if (a>=16 && a<=30) {
// 	alert('Second quoter');
// }
// else if (a>=31 && a<=45){
// 	alert('Third quoter');
// }
// else if (a>=46 && a<=59) {
// 	alert('Fourth quoter');
// }
// }
/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
var minute
if (isNaN(minute)) {
	alert('You write not correct number');
}
else {
	if (minute>=0 && minute<=15) {
	alert('First quoter');
}
else if (minute>=16 && minute<=30) {
	alert('Second quoter');
}
else if (minute>=31 && minute<=45){
	alert('Third quoter');
}
else if (minute>=46 && minute<=59) {
	alert('Fourth quoter');
}
}
    return;
}

module.exports = hourQuoter;
