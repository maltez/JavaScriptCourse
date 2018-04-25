/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */

// ______start_______
 function factorial(num) {
    if (typeof num === "number"){
    var muliply = 1;
    var i;
      for (i=2; i<=num; i++){
        muliply = muliply*i
       }
      return muliply;
    }
    else {
      return ("Not a number")
    }
  }
  console.log (factorial(7));
//  _____end_______ 

module.exports = factorial;
