// var a = [2,4,7,10,-5,8,-3];
// var b = [];
// console.log(a);
// console.log(b);

// for (i=0; i < a.length; i+=1) {
// 	if (a[i] > 0) {
// 		b.push(a[i]);
// 	}
// }
// alert(b);

/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
	var a = input;
	var b = [];
	console.log(a);
	console.log(b);

	for (i=0; i < a.length; i+=1) {
		if (a[i] > 0) {
			b.push(a[i]);
		}
	}
	alert(b);
    return;
}

module.exports = negativeFilter;
