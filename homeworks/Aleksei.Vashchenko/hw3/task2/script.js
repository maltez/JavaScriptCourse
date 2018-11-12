// var c = [1,4,6,9,15,8,11,5,12,18,3];
// var d = [];
// console.log(c);
// for (i=0; i<c.length; i+=1) {
// 	if (c[i]>0 && c[i]<10) {
// 		d.push(c[i]);
// 	}
// }
// alert(d);
// console.log(d);
/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
	var c = input;
	var d = [];
	console.log(c);
	for (i=0; i<c.length; i+=1) {
		if (c[i]>0 && c[i]<10) {
			d.push(c[i]);
		}
	}
	alert(d);
	console.log(d);
	    return;
}

module.exports = advancedFilter;