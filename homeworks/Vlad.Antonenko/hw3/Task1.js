/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input){
	var newArray = [];
	for (var i = 0; i < input.length; i++){
		if (isPositive(input[i])){
			newArray.push(input[i]);
		}
	}
	return newArray
} 
function isPositive (number){
	return (number > 0) ? true : false;
}
var arr = [1, 2, 3, -3, -1, -6, 6, 7, 2, -4, 5, 6];
console.log(negativeFilter(arr));

module.exports = negativeFilter;
