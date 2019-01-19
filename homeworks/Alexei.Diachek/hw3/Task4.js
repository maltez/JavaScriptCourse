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
    const SECOND_VALUE = 100;
    input
      .toLowerCase()
      .split('')
      .forEach(function(e) {
        if (alphabet.indexOf(e) !== -1) {
          //random will be 1 or 0
          let random = Math.round(Math.random());
          //choose how to conver a letter, in index of letter or index + secondValue
          if (random === 0) {
            result.push(alphabet.indexOf(e));
          } else {
            result.push(alphabet.indexOf(e) + SECOND_VALUE);
          }
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
    const SECOND_VALUE = 100;
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
      } else if (e >= 100 && e < alphabet.length + SECOND_VALUE) {
        output += alphabet[e - SECOND_VALUE];
      }
    });
    return output;
  } else {
    return 'Your key is wrong';
  }
}

module.exports = {
  encode,
  decode
};
