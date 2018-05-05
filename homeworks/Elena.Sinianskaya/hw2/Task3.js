/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

//  _____start_____
function secondsCount(hours) {
  if (typeof hours === "number" && hours>0 ){
    return (hours * 3600);
  }
  else {
    return ("Please, wright a number or number > 0.");
  }
}

// _____finish____
module.exports = secondsCount;
