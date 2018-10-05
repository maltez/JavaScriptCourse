/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    input = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя';
    var objKey = key.toLowerCase().split('');
    var objInput = input.toLowerCase().split('');
    var obj = [];
    for (var i = 0; i < objKey.length; i += 1) {
        var str = '';
        for (var j = 0; j < objInput.length; j += 1) {
            if (objKey[i] === objInput[j]) {
                str += j + ' ';
            }

        }
        obj.push(str);
    }
    return obj;
}
console.log(encode());
/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {

    // for(var k = 0; k < input.length; k += 1){

    // }

}
console.log(decode(encode()));
// module.exports = {
//     encode,
//     decode,
// };