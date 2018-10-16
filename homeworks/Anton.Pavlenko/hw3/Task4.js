/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
console.log(encode('Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя'))
function encode(input, key=' абвгдеёжзийклмнопрстуфхцчшщъыьэюя,') {
    var codeArr=[];

    var arrKey = key.split('');
    var arrInput = input.toLowerCase().split('');

    for(var i=0; i<arrInput.length; i++){
        for(var j=0; j<arrKey.length;j++){
            if(arrInput[i]===arrKey[j]){
                codeArr.push(arrKey.indexOf(arrKey[j]));
            }
        }
    }
    
    console.log(codeArr);
    decode(codeArr);
    return codeArr;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key=' абвгдеёжзийклмнопрстуфхцчшщъыьэюя,') {
    var arrKey = key.split('');
    var decodeArr=[];
    for(var i=0; i<input.length; i++){
        for(var j=0; j<arrKey.length;j++){
            if(input[i]==arrKey.indexOf(arrKey[j])){
                decodeArr.push(arrKey[j]);
            }
        }
    }
    var decodeStr = decodeArr.join('')
    console.log(decodeStr);
    return decodeStr;
}

module.exports = {
    encode,
    decode,
};
