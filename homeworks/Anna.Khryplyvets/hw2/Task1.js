/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns true or false.
 */

function stringBuilder(input) {
    var arr = [];

    if(typeof input === 'number' && !isNaN(input)) {
        if(input < 0) {
            for(var i=1; i >= input; i--){
                arr.push(i);
            }
        }
        for(var i=1; i <= input; i++){
            arr.push(i);
        }
    
        arr.join(',');
        var result = arr.toString();
        return result; 
    }
};

stringBuilder();

module.exports = stringBuilder;

