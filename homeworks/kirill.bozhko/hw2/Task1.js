/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var str = [];
    if (typeof input === 'number') {
        
        if (input < 1){
            var i;
            for (i = 1; i > input; i-- ){
                str.push(i);
            }
        }
        
        if (input >= 1){
        var i;
        for (i=1; i < input; i++){
            str.push(i)
        }
    }

    else {
        return false;
    }

    str.join(',');
    return  str.toString();
}
}
module.exports = stringBuilder;

