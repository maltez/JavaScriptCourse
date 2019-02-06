/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */

const createPhoneNumber = input => {
  'use strict';
  if (!Array.isArray(input) || input.length != 10) {
    return false;
  } else {
    if (input.every(elem => elem >= 0 && elem < 10 && typeof elem === 'number')){
    input[0] = '(' + input[0];
    input[2] = input[2] + ') ';
    input[5] = input[5] + '-';
    return input.join('');
    } else {
        return false
    }
  }
}

module.exports = createPhoneNumber
