/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = (input) => {
    const result = '';
    for (let i = 0; i < input.length; i += 1) {
        if (input[i] > 9 || input[i] < 0 || typeof (input[i]) === 'string') {
            throw new Error('Error');
        }
    }
    return result.concat('(', input.slice(0, 3).join(''), ') ', input.slice(3, 6).join(''), '-', input.slice(6, 8).join(''), input.slice(8).join(''));
};
module.exports = createPhoneNumber;
