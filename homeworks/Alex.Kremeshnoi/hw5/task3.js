/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = (input) => {
    if (input.length === 10) {
        var phoneNumber = [];
        for (let i = 0; i < input.length; i += 1) {
            phoneNumber.push(input[i])
            if (i == 2) {
                phoneNumber.push(') ')
            } if (i == 5) {
                phoneNumber.push('-') 
            }
        } var input = phoneNumber.join('');
        return '(' + input
    } else {
        return false;
    }
}; console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

module.exports = createPhoneNumber;
