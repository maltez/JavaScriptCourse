/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {

    var i;
    var result;
    var isDataValid = true;

    input.forEach(function(a) {

        if (a < 0 || a > 9) {
            isDataValid = false;
        }
    });

    if (!isDataValid) {
        return 'data is not valid';
    }

    result ='(' + input[0] + input[1] + input[2] + ') ' + input[3] + input[4] + input[5] + '-' + input[6] + input[7] + input[8] + input[9];
  
return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

module.exports = createPhoneNumber;
