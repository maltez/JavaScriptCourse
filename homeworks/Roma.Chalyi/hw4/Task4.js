/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */


const maxMin = (input, order = true) => {
 
    if(order === true) {
        var max; 
        for (i = 0; i < input.length; i++){
            if(typeof(input[i]) === 'number'){   //data type checking
                max = input[i];                  //just in case 
                break;
            }
        }
        for(i = 0; i <input.length; i++) {
            if(typeof(input[i]) === 'number') {
                if(max < input[i]) {
                    max = input[i];
                }
            }
        }
        return max; 
    }
    if(order === false) {
        var min;
        for( i = 0; i < input.length; i++) {
            if(typeof(input[i]) === 'number') {     //data type checking
                min = input[i];                     //just in case                                        
                break;
            }
        }

        for( i = 0; i < input.length; i++) {
            if(typeof(input[i]) === 'number') {
                if(min > input[i]) {
                    min = input[i];
                }
            }
        }
        return min;    
    }
}; 
console.log(maxMin([199, -5, 12, 45, -111], false));

//module.exports = maxMin;