/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    var compare;
    if(array1===null||array2===null){
        return false;
    }
    if(array1.length===0 || array2.length===0){
        return false;
    }
    for(var i=0;i<array2.length;i++){
        compare=false;
        for(var j=0;j<array1.length;j++){
            if(array2[i]===Math.pow(array1[j], 2)){
                
                compare=true;
            }
        }
        if(!compare){
            return compare;
        }
    }
    return compare;
}

module.exports = comp;
