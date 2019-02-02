/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
  'use strict';
  if (
    typeof text !== 'string' ||
    typeof n !== 'number' ||
    n < 1 ||
    text.trim() === ''
  ) {
    return text;
  }
  let result = text;
  while (n >= 1) {
    let secondChars = '';
    let otherChars = '';
    Array.prototype.forEach.call(result, (e, idx) => {
      idx % 2 !== 0 ? (secondChars += e) : (otherChars += e);
    });
    result = secondChars + otherChars;
    n -= 1;
  }
  return result;
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
  'use strict';
  if (
    typeof encryptedText !== 'string' ||
    typeof n !== 'number' ||
    n < 1 ||
    encryptedText.trim() === ''
  ) {
    return encryptedText;
  }
  let result = encryptedText;
  let halfOfLentgh = Math.floor(result.length / 2);
  while (n >= 1) {
    let firstHalfOfStr = Array.prototype.slice.call(result, 0, halfOfLentgh);
    let secondHalfOfStr = Array.prototype.slice.call(result, halfOfLentgh);
    result = '';
    secondHalfOfStr.forEach((e, idx) => {
      if (firstHalfOfStr[idx]) {
        result += e + firstHalfOfStr[idx];
      } else {
        result += e;
      }
    });
    n -= 1;
  }
  return result;
};
module.exports = { encrypt, decrypt };
