/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

var inputs = 'Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя';
var inputs2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    const arr1 = input.split('');
    const arr2 = key.split('');
    arr1.unshift(null);
    arr2.unshift(null);

    let cache;
    const result = [];

    const ln1 = arr1.length;
    const ln2 = arr2.length;

    let index = 1;

    function getNumber(value) {
        for (let i = index; i < ln2; i += 1) {
            if (value === arr2[i]) {
                result.push(i);
                index = i + 1;
                return index;
            }
        }
        return index;
    }

    for (let j = 1; j < ln1; j += 1) {
        cache = arr1[j].toLowerCase();
        getNumber(cache);
    }
    return result;
}

encode(inputs);

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    const arr1 = input;
    const arr2 = key.split('');
    let cache;
    let cache2;
    const result = [];

    const ln1 = arr1.length;

    for (let i = 0; i < ln1; i += 1) {
        cache = arr1[i];
        cache2 = arr2[cache - 1];
        result.push(cache2);
    }

    return result.join('').toString();
}

decode(inputs2);

module.exports = {
    encode,
    decode,
};
