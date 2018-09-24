/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key='абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    if (typeof (input) !== 'string' && typeof (key) !== 'string') {
        throw new Error('Input type not a string');
    }

    let array = [];
    let itemsArray = input.toLowerCase().split('');

    for (let i = 0; i < itemsArray.lenth; i++) {
        let item = key.indexOf(itemsArray[i]) + 1;
        let temp = key.split('');
        temp[key.indexOf(itemsArray[i])] = ' ';
        key = temp.join('');
        array.push(item);
    }
    return array;

}



/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key='абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    if ( typeof input !== 'object' || isNaN(input.length) || typeof (key) !== 'string') {
        throw new Error('Input type not a number or key not a string');
    }
    let decodeArray = [];

    for (let i=0; i<itemsArray.length; i++){
      decodeArray.push(key[input[i] - 1]);
    }
    return decodeArray.join('');
}


module.exports = {
    encode,
    decode,
};
