/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = input => {
  if (!Array.isArray(input) || input.length !== 10) {
    return false;
  }
  let isCorrectNums = input.every(
    num => num >= 0 && num < 10 && typeof num === 'number'
  );
  let output = '';
  const separetor = {
    OPEN_PARENTHESIS: 0,
    CLOSING_PARENTHESIS: 3,
    HYPHEN: 6
  };
  if (isCorrectNums) {
    input.forEach((e, idx) => {
      switch (idx) {
        case separetor.OPEN_PARENTHESIS:
          output = '(';
          break;
        case separetor.CLOSING_PARENTHESIS:
          output += ') ';
          break;
        case separetor.HYPHEN:
          output += '-';
          break;
      }
      output += e;
    });
    return output;
  } else {
    return false;
  }
};
module.exports = createPhoneNumber;
