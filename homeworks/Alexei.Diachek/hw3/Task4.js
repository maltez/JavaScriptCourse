/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
  if (typeof input !== 'string') {
    return false;
  }
  if (key === 'js') {
    let alphabet = [
      'а',
      'б',
      'в',
      'г',
      'д',
      'е',
      'ё',
      'ж',
      'з',
      'и',
      'й',
      'к',
      'л',
      'м',
      'н',
      'о',
      'п',
      'р',
      'с',
      'т',
      'у',
      'ф',
      'х',
      'ц',
      'ч',
      'ш',
      'щ',
      'ъ',
      'ы',
      'ь',
      'э',
      'ю',
      'я',
      '.',
      ',',
      ' '
    ];
    let result = [];
    input
      .toLowerCase()
      .split('')
      .forEach(function(e) {
        if (alphabet.indexOf(e) !== -1) {
          result.push(alphabet.indexOf(e));
        }
      });
    return result;
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
  if (!Array.isArray(input)) {
    return false;
  }
  if (key === 'js') {
    let output = '';
    let alphabet = [
      'а',
      'б',
      'в',
      'г',
      'д',
      'е',
      'ё',
      'ж',
      'з',
      'и',
      'й',
      'к',
      'л',
      'м',
      'н',
      'о',
      'п',
      'р',
      'с',
      'т',
      'у',
      'ф',
      'х',
      'ц',
      'ч',
      'ш',
      'щ',
      'ъ',
      'ы',
      'ь',
      'э',
      'ю',
      'я',
      '.',
      ',',
      ' '
    ];
    input.forEach(function(e) {
      if (e >= 0 && e < alphabet.length) {
        output += alphabet[e];
      }
    });
    return output;
  } else {
    return 'Your key is wrong';
  }
}

/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode_v2(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
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
function decode_v2(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя') {
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
