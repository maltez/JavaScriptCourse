/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    let result = "" ;

    if (typeof input != "Number"){
        return;
    } if (input > 0 ) {
        for (let i = 1; i <= input; i++){
            result += i + ",";
        }
    } else if (input < 0) {
        for (let a = 1; a >= input; a--){
            result += a + "," ; 
        }

    }
    console.log(result);

    
};

module.exports = stringBuilder;

