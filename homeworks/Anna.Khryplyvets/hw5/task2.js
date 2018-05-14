/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

function comp(array1, array2){
    if(array1.length === 0 || array2.length === 0){
        return false;
    }
    var arr = array1.map(function(num){return num*num});
    var arr2 = [];

    for(var i = 0; i < arr.length; i += 1){
        if(array2.includes(arr[i])){
            arr2.push(true);
            var index = array2.indexOf(arr[i]);
            array2.splice(index,1);
        } else{
            arr2.push(false);
        }
    }
    return arr2.includes(false) ? false : true;
}

module.exports = comp;
