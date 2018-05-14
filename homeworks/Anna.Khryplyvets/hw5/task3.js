/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {
    input.unshift("(");
    input.splice(4, 0, ")", " ");
    input.splice(9, 0, "-");
    return input.join("");
}

module.exports = createPhoneNumber;
