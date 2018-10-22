
function maxMin  (input, order = false){
    function getMaxValue(input){
        var max = input[0]; 
        for (var i = 0; i < input.length; i++) { 
            if (max < input[i]) max = input[i]; 
        }
        return max;
        }
    function getMinValue(input){
        var min = input[0];
        for (var i = 0; i < input.length; i++) {
            if (min > input[i]) min = input[i];
        }
        return min;
        }
    return order ? getMaxValue (input) : getMinValue (input);
    }
console.log(maxMin([2, 5, 6, -7, 12, 15, 0, 3, -8, 9]))
module.exports = maxMin;

