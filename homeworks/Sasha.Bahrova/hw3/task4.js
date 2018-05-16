/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key='абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
    if (typeof (input) !== 'string' || typeof(input) == '' && typeof (key) !== 'string') {
        return;
    };

    const array = [];
    let itemsArray = input.toLowerCase().split('');

    for (let i = 0; i < itemsArray.lenth; i+=1) {
        let item = symbols.indexOf([i]);
        array.push(i);
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
    let itemsArray = input.toLowerCase().split('');
    let keyArray = key.split('');
    let decodeArray = [];

    for (let i=0; i<itemsArray.length; i+=1){
      decodeString.push(i);
    }
    return decodeArray;
}


module.exports = {
    encode,
    decode,
};
