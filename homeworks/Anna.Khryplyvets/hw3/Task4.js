/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

var input = "Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя";

function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ") {
    var arr1 = input.split('');
    var arr2 = key.split('');
    var cache;
    var result = [];

    var ln1 = arr1.length;
    var ln2 = arr2.length;
    
    for(var i = 0; i < ln1; i++){
        cache = arr1[i].toLowerCase();
        
        for(var j = 0; j < ln2; j++){
            if(cache == arr2[j].toLowerCase()){
                var num = j;
                result.push(num);
            }
        }
    }
    return result;
}

encode();

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

var input = "16,17,9,2,5,19";

function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ") {
    var arr1 = input.split(',');
    var arr2 = key.split('');
    var cache;
    var cache2;
    var result = [];

    var ln1 = arr1.length;
    
    for(var i = 0; i < ln1; i++){
        cache = arr1[i];
        cache2 = arr2[cache];
        result.push(cache2);
    }

    return result.join('').toString();
}

decode();

module.exports = {
    encode,
    decode,
};
