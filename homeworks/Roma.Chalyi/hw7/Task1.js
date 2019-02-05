/** 
* sorting the array from the minimum to the maximum value (bubble method)
* @param {array[number]}
* @return {array[number]} sort
*/


var arr = [77,43,454,-4,22,9,2,1,5,8,0,-50,555,345,7];

function SortMinToMax(arr) {
    var temporary;
    for(var i = 1; i < arr.length; i++){
        for(var j = 0 ; j < arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                temporary = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temporary;
            }
        }
    }
    return(arr);
}
console.log(SortMinToMax(arr));


/** 
* sorting the array from the maximum to the minimum value (bubble method)
* @param {array[number]}
* @return {array[number]} sort
*/

var arr = [77,43,454,-4,22,9,2,1,5,8,0,-50,555,345,7];

function SortMaxToMin(arr) {
    var temporary;
    for(var i = 1; i < arr.length; i++){
        for(var j = 0 ; j < arr.length - i; j++){
            if(arr[j] < arr[j + 1]){
                temporary = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temporary;
            }
        }
    }
    return(arr);
}
console.log(SortMaxToMin(arr));
