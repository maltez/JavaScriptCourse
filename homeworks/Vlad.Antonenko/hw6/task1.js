/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {

  'use strict'

  if (n <= 0) {
    return text;
  } else if (typeof text !== 'string') {
    return typeof text;
  } else {

    let encryptStr = text;

    while (n > 0) {
      let everySecChar = '';
      let otherChar = '';

      for (let i = 1; i < encryptStr.length; i += 2) {
        everySecChar += encryptStr[i];
      }
      for (let i = 0; i < encryptStr.length; i += 2) {
        otherChar += encryptStr[i];
      }

      n -= 1;

      encryptStr = everySecChar + otherChar;
    }
    return encryptStr;
  }
}


/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

  'use strict'
  
  if (n <= 0) {
    return encryptedText;
  } else if (typeof encryptedText !== 'string') {
    return typeof encryptedText;
  } else {

    let decryptText = encryptedText.split('');

    while (n > 0) {
      let result = [];
      let firstPartOfText = decryptText.slice(decryptText.length / 2);
      let secondPartOfText = decryptText.slice(0, decryptText.length / 2);

      for (var i = 0; i < secondPartOfText.length; i++) {
        result.push(firstPartOfText[i] += secondPartOfText[i]);
      }

      if (firstPartOfText.length != secondPartOfText.length) {
        result.push(firstPartOfText[firstPartOfText.length - 1]);
      }

      n -= 1;

      result = result.join('').split('');

      decryptText = result;
    }
    return decryptText.join('')
  }
}

module.exports = { encrypt, decrypt }
