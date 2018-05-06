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
    arr1.unshift(null);
    arr2.unshift(null);

    var cache;
    var result = [];

    function getNumber(value, array){
        for(var i = 1; i < array.length; i += 1) {
            if(value === array[i]) {
                return i;
            }
        }
    }

    for(var i = 1; i < arr1.length; i += 1){
        cache = arr1[i].toLowerCase();
        result.push(getNumber(cache, arr2));
    }
    return result;
}

encode(input);

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

var input = [1,2,3,4,5,6,7,8,9];

function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ") {
    var arr1 = input;
    var arr2 = key.split('');
    var cache;
    var cache2;
    var result = [];

    var ln1 = arr1.length;
    
    for(var i = 0; i < ln1; i++){
        cache = arr1[i];
        cache2 = arr2[cache - 1];
        result.push(cache2);
    }

    return result.join('').toString();
}

decode(input);

module.exports = {
    encode,
    decode,
};
