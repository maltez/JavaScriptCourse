/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var input = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет, то заплачет как дитя';
    var lowerSplitInput = input.toLowerCase().split('');
    var lowerSplitKey = key.split('');
    var arr = [];
    for (var i = 0; i < lowerSplitInput.length; i += 1) {
        for (var y = 0; y < lowerSplitKey.length; y +=1) {
            if (lowerSplitKey[y] === lowerSplitInput[i]) {
                arr.push(y);
            }
        }
    } return arr;
} console.log(encode());

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
var enc = encode();

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var str = '';
    for (var i = 0; i < input.length; i += 1) {
        str += key.charAt(input[i]);
    } return str;
} console.log(decode(enc));

module.exports = {
    encode,
    decode,
};
