/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {

    if (typeof(input) !== 'string' || typeof(key) !== 'string') {
        return 'data is not valid';
    }

    var codeArr = [];

    for (var i = 0; i < input.length; i++) {
        var currentItem = input[i].toLowerCase();
        var encodedItem = key.indexOf(currentItem) + 1;
        codeArr.push(encodedItem);
    }

    return codeArr;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {

    if (typeof(key) !== 'string') {       
        return 'data is not valid';
    }

    var result = "";

    for (var i = 0; i < input.length; i++) {
        var encodedCharIndex = input[i] - 1;
        result += key[encodedCharIndex];
    }
    
    return result;
}

console.log(decode(encode("АбВгдеёЖЗ")));


module.exports = {
    encode,
    decode,
};
