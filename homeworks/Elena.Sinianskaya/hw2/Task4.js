/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */

//  _____start_____
function isDevided(first, second) {
  if (typeof first === "number" && typeof second === "number"){
     if (first%second === 0){
       return true;
    }
    else {
       return false;
    }
  }
  else {
    return("Not a number! Please, wright a number");
  }
}
console.log(isDevided(10, 2));

//   finish

module.exports = isDevided;
