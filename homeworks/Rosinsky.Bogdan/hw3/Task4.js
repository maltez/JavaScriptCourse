/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    // If not string then exit.
    if (typeof input !== 'string' || typeof key !== 'string') {
        return false;
    }
    // Small letters.
    const inputLowerCase = input.toLowerCase();
    const keyLowerCase = key.toLowerCase();
    // Length of string and key.
    const inputlen = inputLowerCase.length;
    const code = [];

    for (let i = 0; i < inputlen; i += 1) {
        code[i] = keyLowerCase.indexOf(inputLowerCase[i], i) + 1;
    }
    return code;
}

// Getting the letter code.
function getLetter(codeArr, key, len, i) {
    for (let j = 0; j < len; j += 1) {
        if ((j + 1) === codeArr[i]) {
            return key[j];
        }
    }
    return false;
}
/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input = [], key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    // If the first argument is not an array and the second is not a string, then exit.
    if (!Array.isArray(input) || typeof key !== 'string') {
        return false;
    }
    let letters = '';
    const keyLowerCase = key.toLowerCase();
    const keyLength = key.length;

    for (let i = 0; i < input.length; i += 1) {
        letters += getLetter(input, keyLowerCase, keyLength, i);
    }
    return letters;
}

module.exports = {
    encode,
    decode,
};
