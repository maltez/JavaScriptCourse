/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя") {
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
                keyCodeArray.push(k + (sum - index));
            }
        }
    }

    return keyCodeArray;
}
console.log(encode('штирлиц'));
/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя") {
    var keyCodeArray = [];
    var keyLowerCase = key.toLowerCase();
    var keyArray = keyLowerCase.split('');
    
    for(var i = 0; i < input.length; i++) {
        var item = input[i];
        keygen(item, i, input.length);
    } 
  
    function keygen(num, index, sum) {
        for(var k = 0; k < keyArray.length; k++) {
            if(num === ((sum - index) + k)) {
                keyCodeArray.push(keyArray[k]);
            }
        }
    }

    return keyCodeArray.join('');
}

console.log(decode([ 32, 25, 14, 21, 15, 11, 24 ]));

module.exports = {
    encode,
    decode,
};