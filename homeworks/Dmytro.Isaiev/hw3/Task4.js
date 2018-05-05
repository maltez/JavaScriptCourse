/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key) {

    if (typeof(input) !== 'string' || typeof(key) !== 'string') {       
        return 'data is not valid';
    }

    var codeArr = [];

    for (var i = 0; i < input.length; i++) {
        var currentItem = input[i].toLowerCase();
        var encodedItem = key.indexOf(currentItem);
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
function decode(input, key) {

    if (typeof(key) !== 'string') {       
        return 'data is not valid';
    }

    var result = "";

    for (var i = 0; i < input.length; i++) {
        var encodedCharIndex = input[i];
        result += key[encodedCharIndex];
    }
    
    return result;
}

alert(decode(encode("Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя" , "123вбагдеёжзийклмнопрс туф,хцчшщъыьэюя") , "123вбагдеёжзийклмнопрс туф,хцчшщъыьэюя"));


module.exports = {
    encode,
    decode,
};
