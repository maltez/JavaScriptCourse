/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    if (typeof input !== 'string' || typeof key !== 'string') {
        return false;
    }
    const keyArray = key.toLowerCase().split('');
    const stringArray = input.toLowerCase().split('');
    let arrayItem;
    let keyCodeArray = [];
    function keyGen(letter, index) {
        for (let k = 0; k < keyArray.length; k += 1) {
            if (keyArray[k] === letter) {
                arrayItem = keyArray.indexOf(letter, index) + 1;
                return keyCodeArray.push(arrayItem);
            }
        }
    }
    for (let i = 0; i < stringArray.length; i += 1) {
        keyGen(stringArray[i], i);
    } 
    return keyCodeArray;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    if (!Array.isArray(input) || typeof key !== 'string') {
        return false;
    }
    const keyArray = key.toLowerCase().split('');
    let letterArray = [];
    function letterGen(inputArr, keyArr, index) {
        for (let m = 0; m < keyArr.length; m += 1) {
            if (inputArr[index] === (m + 1)) {
                return letterArray.push(keyArr[m]);
            }
        }
    }
    for (let n = 0; n < input.length; n += 1) {
        letterGen(input, keyArray, n);
    }
    return letterArray.join('');
}

module.exports = {
    encode,
    decode,
};
