/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

function encode(input = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя',
    key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var objKey = key.toLowerCase().split('');
    var objInput = input.toLowerCase().split('');
    var obj = [];
    for (var i = 0; i < objInput.length; i += 1) {
        obj.push(objKey.indexOf(objInput[i]));
    }
    return obj;
}
// console.log(encode());

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var objKey = key.toLowerCase().split('');

    var strDecode = '';
    for (var k = 0; k < input.length; k += 1) {
        for (var j = 0; j < objKey.length; j += 1) {
            if (input[k] === j) {

                strDecode += objKey[j];

            }
        }
    }
    return strDecode;

}
console.log(decode(encode()));
module.exports = {
    encode,
    decode,
};