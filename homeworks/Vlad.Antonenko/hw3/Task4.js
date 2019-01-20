/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    if (key){
        var arrWithEncodeStr = [];
        for (var i = 0; i < input.length; i++){
            arrWithEncodeStr.push(input[i].charCodeAt()); 
        } return arrWithEncodeStr;
    }
    else {
        return 'Key code wrong'
    }
}
console.log(encode('Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя', 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'));

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    if (key){
        var arrWithCharCode = [];
        input.forEach(function (a){
           arrWithCharCode.push(String.fromCharCode(a));
        });
        return arrWithCharCode.join('');
    } else {
        return 'Key code wrong'
    }
}

module.exports = {
    encode,
    decode,
};
