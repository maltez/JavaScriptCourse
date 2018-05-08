/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */

// ______start_______
// function factorial(num) {
//   if (typeof num === "number"){
//   var muliply = 1;
//   var i;
//     for (i=2; i<=num; i++){
//       muliply = muliply*i;
//      }
//     return muliply;
//   }
//   else {
//     return ("Not a number");
//   }
// }

// The second variant-2 
function factorial(num) {  
    if (num < 0) {  
        return -1;  
    }  
    else if (num == 0) {  
        return 1;  
    }  
    var factorial = num;  
    while (num-- > 2) {  
      factorial *= num;  
    }  
    return factorial;  
}  

//  _____end_______ 

module.exports = factorial;
