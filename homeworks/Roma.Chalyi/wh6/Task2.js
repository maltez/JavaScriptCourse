/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    var result;
    if(Array.isArray(array1) && Array.isArray(array2)) {

        if(array1.length === 0 && array2.length === 0){
            return false + ' (you are comparing two empty arrays)'      //check for empty array
        }
        else if(array1.length === 0 || array2.length === 0){
            return false + ' (as one of the arrays is empty)'
        }

        for(var i = 0; i < array1.length; i++ ){                //the first loop goes through the elements array1
            if(typeof(array1[i]) === !'number'){
                return false;
            }
            array1[i] < 0 ? array1[i] = array1[i] * -1 : array1[i];  //take value modulo

            for(var a = 0; a <= array2.length; a++){       //the second loop goes through the elements of array2
                if(typeof(array2[a]) === !'number' || array2[i] < 0 || a === array2.length){
                    return false
                }       
                if(array1[i] === array2[a] || Math.sqrt(array2[a]) === array1[i]){
                    break
                }
                }
                
            }
        result =  true; // код ниже сделан чтобы функция принимающая  параметры a = [11,11] b = [121, любая цифра] не вернула true;
        if(result = true) {
            for(var i = 0; i < array2.length; i++ ){                //the first loop goes through the elements array2
                if(typeof(array2[i]) === !'number' || array2[i] < 0 ){
                    return false;
                }
                for(var a = 0; a <= array1.length; a++) {               //the second loop goes through the elements array1
                    if(typeof(array1[a]) === !'number' || a === array1.length){
                        return false
                    } 
                    array1[a] < 0 ? array1[a] = array1[a] * -1 : array1[a];  //take value modulo
                    if(array2[i] === array1[a] || Math.sqrt(array2[i]) === array1[a]){
                        break;
                    }
                }   
            }
        }
        return true
    }
    else{
        return 'function parameters are not an array'
    }
}
/*console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]));*/

module.exports = comp; 
