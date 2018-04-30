/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ") {
    var keyCodeArray = [];
    var keyLowerCase = key.toLowerCase();
    var stringLowerCase = input.toLowerCase();
    var keyArray = keyLowerCase.split('');
    var stringArray = stringLowerCase.split('');
    
    for(var i = 0; i < stringArray.length; i++) {
        var item = stringArray[i];
        keygen(item, i, stringArray.length);
    } 
  
    function keygen(letter, index, sum) {
        for(var k = 0; k < keyArray.length; k++) {
            if(letter === keyArray[k]) {
                keyCodeArray.push(k + (sum + index));
            }
        }
    }

    return keyCodeArray;
}
console.log(encode('штирлиц привет'));
/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ") {
    var keyCodeArray = [];
    var keyLowerCase = key.toLowerCase();
    var keyArray = keyLowerCase.split('');
    
    for(var i = 0; i < input.length; i++) {
        var item = input[i];
        keygen(item, i, input.length);
    } 
  
    function keygen(num, index, sum) {
        for(var k = 0; k < keyArray.length; k++) {
            if(num === ((sum + index) + k)) {
                keyCodeArray.push(keyArray[k]);
            }
        }
    }

    return keyCodeArray.join('');
}

console.log(decode([ 39, 34, 25, 34, 30, 28, 43, 54, 38, 40, 33, 27, 31, 46 ]));

module.exports = {
    encode,
    decode,
};