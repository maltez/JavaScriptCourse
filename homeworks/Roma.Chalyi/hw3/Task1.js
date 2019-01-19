/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

 function isPositive(item) {     
        if (item > 0) {                 //auxiliary function
            return true;  
        }
        else {
            return false;
        }
};

function negativeFilter(input) {
    var newArray =  [];

    for (i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number'){
            if ( isPositive(input[i])) {

                newArray.push(input[i]);
            }   
            else {
                continue;
            }
        }
    }
    return newArray;
}     

console.log(negativeFilter([3, 7, 5, 'hello', false, -55, 44, '34', 60, 17, -0, 0, '54767687', true]));

