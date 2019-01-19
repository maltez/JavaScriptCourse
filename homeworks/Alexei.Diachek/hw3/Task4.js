/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
  if (key === 'js') {
    let arrOfCodes = [];
    for (var i = 0; i < input.length; i++) {
      arrOfCodes.push(input[i].codePointAt());
    }
    return arrOfCodes;
  } else {
    return 'Your key is wrong';
  }
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
  if (key === 'js') {
    let arrOfLetters = [];
    input.forEach(function(e) {
      arrOfLetters.push(String.fromCodePoint(e));
    });
    return arrOfLetters.join('');
  } else {
    return 'Your key is wrong';
  }
}

module.exports = {
  encode,
  decode
};
