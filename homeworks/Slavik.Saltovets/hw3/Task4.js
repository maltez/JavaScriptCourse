function encode(input, key) {
    // var obj = {};
    var dictCharacters = {};
    var strin1 = input.split('');

    for (i = 0; i < strin1.length; i += 1) {
        dictCharacters[strin1[i]] = [key];
        key += 1;
        // obj.set(key + i , strin1[i])
    }
    console.log(dictCharacters);
    return dictCharacters;
}

//"Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя"
//"абвгдеёжзийклмнопрстуфхцчшщъыьэюя "

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key, firstResult) {
    var otvet = '';
    var strin2 = input.toLowerCase().split('');
    for (i = 0; i < strin2.length; i += 1) {
        if (strin2[i] in firstResult) {
            otvet += (firstResult[strin2[i]]) + ' ';
            // otvet.push(firstResult[strin2[i]]);
        }
    }
    console.log(otvet);
    return otvet;
}

firstResult = encode('абвгдеёжзийклмнопрстуфхцчшщъыьэюя', 1);
secondResult = decode("Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя", 1, firstResult);
module.exports = {
    encode,
    decode,
};