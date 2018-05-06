/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
  if (typeof input === 'number' && input >= 1) {
      var str = '';
      var i;
      for (i = 1; i < input; i++) {
          str += i + ", ";
          console.log(str + Number(i + 1));
      }
  } else if (typeof input === 'number' && input < 1) {
      var strMinus = '';
      var j;
      for (j = 1; j > input - 1; j--) {
          strMinus += j + ", ";
          console.log(strMinus);
      }
  } else {
      console.log("Enter a number!")
  }
};

module.exports = stringBuilder;
