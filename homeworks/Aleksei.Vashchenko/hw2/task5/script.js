// var a = 1;
// var b = 0;
// if (b==0) {
// 	alert('b must be more than 0');
// }
// else {
// for (i=1; i<=b; i+=1) {
// 	a = a * i;
// }
// }
// alert(a);

/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
var a = 1;
var b = num;
if (b==0) {
	alert('num must be more than 0');
}
else {
for (i=1; i<=b; i+=1) {
	a = a * i;
}
}
alert(a);
    return;
}

module.exports = factorial;