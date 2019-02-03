/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */

const createPhoneNumber =(input) => {
    if(Array.isArray(input) && input.length === 10){
        var result = '';
        for (var i = 0; i < input.length; i++) {
            if(typeof(input[i]) === 'number' && input[i] >= 0 && input[i] <= 9 ){
               result = '(' + input[0] + input[1] + input[2] +') ' + input[3] + input[4] + input [5] + '-' + input[6] + input[7] + input[8] + input[9] 
            }
            else {
                return false;
            }
        }
        return result
    }
    else {
        return false;
    }
  
}
/*console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); */
module.exports = createPhoneNumber; 

