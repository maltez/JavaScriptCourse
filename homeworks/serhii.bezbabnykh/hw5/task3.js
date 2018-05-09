/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {
    let error = "Error array";

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 10 || input[i] < 0 || typeof(input[i]) === 'string') {
            console.log(error);
            return error;
        }
    }

    let number = '(' + input.slice(0, 3).join('') + ')' + ' ' + input.slice(3, 6).join('') + '-' + input.slice(6, 8).join('') + input.slice(8, 10).join('');

    return number; 
}

module.exports = createPhoneNumber;
