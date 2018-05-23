@ -0,0 +1,7 @@
/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
  if (typeof num !== "number" && num<=0){
    return;
  }else{
    return (num !== 1) ? num * factorial(num - 1) : 1;
  }
 }

module.exports = factorial;
