/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {
    return '('+input[0]+input[1]+input[2]+')'+' '+input[3]+input[4]+input[5]+'-'
        +input[6]+input[7]+input[8]+input[9];
}
// console.log(createPhoneNumber([]));
module.exports = createPhoneNumber;
