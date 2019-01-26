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

    for (var i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number'){
            if ( isPositive(input[i]) === true) {

                newArray.push(input[i]);
            }   
            else {
                continue;
            }
        }
    }
    return newArray;
}     

console.log(negativeFilter([true, 5]));

//module.exports = negativeFilter;

