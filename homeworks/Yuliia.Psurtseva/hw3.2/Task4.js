/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key) {
    let testInput = input.toLowerCase().replace(/,/g, '');
    let testKey = key.toLowerCase();
    let encrypto = [];

    for (i=0; i<testInput.length; i++) {
        let test1 = testKey.indexOf(testInput[i]) +1;
        encrypto.push(test1); 
    }

    return encrypto.join(', ');

}
console.log(encode('Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя', key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '));



/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */


function decode(input, key) {
    let decrypto = [];
        for (let j = 0; j < input.length; j++) {
        let test2 = key.charAt(input[j]-1);
        decrypto.push(test2);  
        }
    return decrypto.join('');
}
console.log(decode([2,21, 18, 33, 34, 14, 4, 13, 16, 32, 34, 15, 6, 5, 16, 34, 12, 18, 16, 6, 20, 34, 3, 10, 23, 18, 10, 34, 19, 15, 6, 8, 15, 29, 6, 34, 12, 18, 21, 20, 33, 34, 20, 16, 34, 12, 1, 12, 34, 9, 3, 6, 18, 30, 34, 16, 1, 34, 9, 1, 3, 16, 6, 20, 34, 20, 16, 34, 9, 1, 17, 13, 1, 25, 6, 20, 34, 12, 1, 12, 34, 5, 10, 20, 33 ], key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '));


module.exports = {
    encode,
    decode,
};
