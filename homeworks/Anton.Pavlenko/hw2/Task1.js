/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
console.log(stringBuilder(10));

function stringBuilder(input) {
    var string=1;
    if (typeof input != 'number') {
        string='Enter a number!';
        return string;
    }
    if(input<0){
        for(var i=string-1;i>=input;i--){
            string+=','+i;
        }
    }
    else{
        for(var i=string+1;i<=input;i++){
            string+=','+i;
        }
    }
    return string;
}

module.exports = stringBuilder;


