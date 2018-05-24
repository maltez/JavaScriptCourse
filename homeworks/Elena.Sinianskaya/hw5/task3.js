/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = (input) => {
    if (!input || Array.isArray(input) === false || input.length !== 10) {
        return 'Sorry, something goes wrong';
    }
    const numberArr = [];
    for (let i = 0; i < input.length; i += 1) {
        if (typeof (input[i]) === 'number') {
            numberArr.push(input[i]);
        } else {
            return NaN;
        }
    }
    const numberStr = numberArr.join('');
    const firstArr = numberStr.slice(0, 3);
    const secondPart = numberStr.slice(3, 6);
    const thirdPart = numberStr.slice(6, 10);
    const phoneNumber = ['('].concat(firstArr, [') '], secondPart, ['-'], thirdPart);
    return phoneNumber.join('');
};

module.exports = createPhoneNumber;
