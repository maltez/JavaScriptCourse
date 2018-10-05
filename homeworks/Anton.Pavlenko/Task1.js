/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

var arr = [22,-5,-7,3,10,4,1,-8,-4,5,15,1,12,-9];
var arrPlus =[];
console.log(negativeFilter(arr));
function negativeFilter(input) {
    for(var i = 0; i<arr.length;i+=1){
        if (isPositive(input[i])){
        arrPlus.push(input[i]);
        }
    }
    return arrPlus;
}
function isPositive(input) {
    if (input<0){
        return false;
    }
    else{
        return true
    }
}
module.exports = negativeFilter;
