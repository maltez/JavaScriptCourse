let input = 'hey it works улалай';

/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя abcdefghijklmnopqrstuvwxyz1234567890') {
    if ((typeof input !== 'string')){
        return 'Please, enter a string.';
    }

    let inputPhrase = input.toLowerCase().split('');
    let keyPhrase = key.split('');
    let encodedData = [];

    // console.log(keyPhrase[6]);

    for (let i = 0; i < inputPhrase.length; i++) {

        for (let z = 0; z < keyPhrase.length; z++) {

            if (inputPhrase[i] === keyPhrase[z]) {
                encodedData.push(z);
            }

        }

    }

    return encodedData;

}

//console.log(encode('hdbjhv 222'));

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя abcdefghijklmnopqrstuvwxyz1234567890') {

    let outputPhrase = [];

    for (let i = 0; i < input.length; i++) {
        outputPhrase.push(key[input[i]]);
    }

    return outputPhrase.join('');

}

console.log(decode(encode(input)));

module.exports = {
    encode,
    decode,
};
