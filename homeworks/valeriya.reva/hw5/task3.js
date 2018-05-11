/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */

const createPhoneNumber = (input) => {
    let phoneNum;
    function testFun(item) {
        return typeof item !== 'number' || item > 9 || item < 0;
    }

    if (!Array.isArray(input) || input.some(testFun) || input.length !== 10) {
        throw new TypeError('invalid value');
    }

    input.reduce((accumulator, element, item) => {
        phoneNum = accumulator;
        if (item === 2) {
            phoneNum += `${element}) `;
        } else if (item === 5) {
            phoneNum += `${element}-`;
        } else {
            phoneNum += element;
        }
        return phoneNum;
    }, '(');

    return phoneNum;
};

module.exports = createPhoneNumber;
