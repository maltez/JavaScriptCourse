/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
  if (typeof minute === 'number') {
      // I use if/else statement instead if switch, because it's faster
      // on a small amount of cases. (as shows tests)
      if (minute <= 15) {
          return ("first quater");
      } else if (minute <= 30) {
          return ("second quater");
      } else if (minute <= 45) {
          return ("third quater");
      } else {
          return ("fifth quater");
      }
  } else {
      return;
  }
    return;
}

module.exports = hourQuoter;
