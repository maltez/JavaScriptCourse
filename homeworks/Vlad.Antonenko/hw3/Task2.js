/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
	var newArray = [];
	for (var i = 0; i < input.length; i++){
		if (isNumberInRange(input[i])){
			newArray.push(input[i]);
		}
	}
    return newArray;
}
function isNumberInRange (number){
	return (number > 0 && number < 10) ? true : false;
}

var arr = [1, 5, 7, 11, 153, 12, 11, 6, 7, 2, 7, 123, 112];
console.log(advancedFilter(arr));

module.exports = advancedFilter;