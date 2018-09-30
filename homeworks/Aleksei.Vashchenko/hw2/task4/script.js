// var a = 6;
// var b = 2;
// if (a % b === 0) {
// 	alert('Hooray');
// }
// else {
// 	alert('Fooooo');
// }
/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
var a = first;
var b = second;
if (a % b === 0) {
	alert('Hooray');
}
else {
	alert('Fooooo');
}
    return;
}

module.exports = isDevided;