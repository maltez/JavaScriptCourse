/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */

//  _____start_____ The firs variant
// function isDevided(first, second) {
//   if (typeof first === "number" && typeof second === "number"){
//      if (first%second === 0){
//        return true;
//     }
//     else {
//        return false;
//     }
//   }
//   else {
//     return("Not a number! Please, wright a number");
//   }
// }
//  _____finish_____

// The second variant (more appropriate)
function isDevided(first, second) {
  if (typeof first === "number" && typeof second === "number"){
        return first%second === 0;
  }
}
 
module.exports = isDevided;
