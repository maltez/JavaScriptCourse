/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */



function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    input = input.toLowerCase();
    key = key.toLowerCase();

    let keyDigitArray = FillDigitArray(key);
    let ValueDigitArray = [];
        
    for (let index = 0; index < input.length; index++) {
        let digitValue = keyDigitArray.indexOf(input[index]);
        ValueDigitArray.push(digitValue);

    }

    return ValueDigitArray;
}

function FillDigitArray(key) {
    let keyArray = [];
    for (let index = 0; index < key.length; index++) {
        keyArray.push(key[index]);
    }
    return keyArray;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    key = key.toLowerCase();
    let keyDigitArray = FillDigitArray(key);
    let Value = "";
    for (let index = 0; index < input.length; index++) {
        Value += keyDigitArray[input[index]];
    }
return Value;

}


module.exports = {
    encode,
    decode,
};
