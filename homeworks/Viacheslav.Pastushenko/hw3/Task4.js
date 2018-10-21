/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {

    const encodeArray = [];
    const encodeKey = key.toLowerCase().split('');
    const encodeInput = input.toLowerCase().split('');

    for (let i = 0; i < encodeInput.length; i += 1) {
        encodeArray.push(encodeKey.indexOf(encodeInput[i]) + 1);
    }

    return encodeArray;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {

    const decodeArray = [];
    let decodeString = '';
    let keyArray = key.split('');

     for (let i = 0; i < input.length; i += 1) {
         for (let j = 0; j < keyArray.length; j += 1) {
             if (input[i] == keyArray.indexOf(keyArray[j])) {
                decodeArray.push(keyArray[j]);
             }
         }
     }

     let decodeString = decodeArray.join('');

    return decodeString;
}

module.exports = {
    encode,
    decode,
};
