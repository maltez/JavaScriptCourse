/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = (input) => {

    if (!input) {
        return;
    } else if(input.length != 10)
    {
        return;
    }

    for (var i = 0; i < 10; i += 1) {
        if (input[i] < 0 || input[i] > 9) {
            return
        }
    }

    var addNumbers = function (from, to) {
        for (iCode = from; iCode < to; iCode += 1) {
            initStr += input[iCode];
        }
    }

    var iCode = 0;

    var initStr = '(';
    addNumbers(0, 3);
    initStr += ') ';
    addNumbers(3, 6);
    initStr += '-';
    addNumbers(6, 10);

    return initStr;
}

module.exports = createPhoneNumber;


console.log(createPhoneNumber([0, 6, 3, 6, 2, 4, 0, 8, 3, 6]));