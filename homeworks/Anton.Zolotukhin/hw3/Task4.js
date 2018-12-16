/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя, ") {
    if (typeof input !== 'string' && typeof key !== 'string') {
        return 'Input or key is not a string'
    }
    var inputToArray = input.toLowerCase().split('');
    var keyToArray = key.toLowerCase().split('');
    var encodedArray = [];
    inputToArray.forEach(function(index) { encodedArray.push(keyToArray.indexOf(index)); });
    return encodedArray;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя, ") {
    if(Array.isArray(input) && typeof key !== 'string') {
        return 'Input is not array or key is not a string'
    }
    var keyToArray = key.toLowerCase().split('');
    var decodedString = [];
    input.forEach(function(index){ decodedString.push(keyToArray[index]); });
    return decodedString.join('');
}

module.exports = {
    encode,
    decode,
};
