/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


function negativeFilter(input) {
    var result = [];

    function isPositive(massdata) {
        return (massdata%2 === 0);
    }
    for (var i = 0; i < input.length; i++) {
        if (isPositive(input[i]) === true) {           
            result.push(input[i]);
        }
    }
    return result;  
}
alert(negativeFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44 ,50]));



module.exports = negativeFilter;
