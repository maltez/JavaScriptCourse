/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

var arr = [22,-5,-7,3,10,4,1,-8,-4,5,15,1,12,-9];
var arrRange =[];
console.log(advancedFilter(arr));

function advancedFilter(input) {
    for(var i = 0; i<arr.length;i+=1){
        if (isNumberInRange(input[i])){
            arrRange.push(input[i]);
        }
    }
    return arrRange;
}

function isNumberInRange(input) {
    if(input>0 && input<10){
        return true;
    }
    else {
        return false;
    }
}

module.exports = advancedFilter;
