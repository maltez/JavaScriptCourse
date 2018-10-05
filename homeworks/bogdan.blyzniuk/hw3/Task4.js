/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key) {
    
var inputLowerCase = input.toLowerCase();
var keyLowerCase = key.toLowerCase();

var splitInput = inputLowerCase.split('');
var splitKey = keyLowerCase.split('');

var encode = [];
for (i = 0; i < splitInput.length; i+=1) {
    encode.push(splitKey.indexOf(splitInput[i]) + 1);
}
    return encode;
}
console.log (encode('Буря мглою недо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя', 
                    'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '));

module.exports = encode;
