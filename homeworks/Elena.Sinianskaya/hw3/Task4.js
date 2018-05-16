/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя, ') {
    if (typeof input !== 'string' || typeof key !== 'string') {
        return 'Please, wright some string';
    }
    const arrPhrase = input.toLowerCase().split('');
    const arrKey = key.toLowerCase().split('');
    const encodedArr = [];
    function getCode(item1, item2) {
        for (let i = 0; i < item1.length; i += 1) {
            const arrPhraseItem = item1[i];
            for (let j = 0; j < item2.length; j += 1) {
                if (arrPhraseItem === item2[j]) {
                    encodedArr.push(j + 1);
                    break;
                }
            }
        }
        return encodedArr;
    }
    const code = getCode(arrPhrase, arrKey);
    function getFinalCode(item) {
        const finalCode = [];
        for (let m = 0; m < item.length; m += 1) {
            finalCode.push(m + 1);
        }
        return finalCode;
    }
    return getFinalCode(code);
}

function decode(input = [], key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя, ') {
    if (!Array.isArray(input) || typeof key !== 'string') {
        return 'Please, wright some string or array';
    }
    const arrKey = key.toLowerCase().split('');
    const finalArr = [];
    for (let i = 0; i < input.length; i += 1) {
        const inpIndex = input[i];
        for (let j = 0; j < arrKey.length; j += 1) {
            if (inpIndex === (j + 1)) {
                finalArr.push(arrKey[j]);
                break;
            }
        }
    }
    return finalArr.join('');
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

module.exports = {
    encode,
    decode,
};
