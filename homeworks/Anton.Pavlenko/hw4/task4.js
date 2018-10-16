/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = false) => {

    if(order){
        var max = input[0];
        for (var i = 0; i < input.length; i++) {
            if (max < input[i]) {
                max = input[i];
            } 
        }
        return max;
    }
    if(!order){
        var min = input[0];
        for (var i = 0; i < input.length; i++) {
            if (min > input[i]){
                min = input[i];
            }
        }
        return min;
    }
    
};

var arrNum=[3,-6,34,7,23,25,493,56,8,5,335];
console.log(maxMin(arrNum));

module.exports = maxMin;
