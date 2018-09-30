/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (isNaN(num)|| num==='')  {
        return('Its not a number');
      } 
      else if (num == 0) {
          return(1);
      }
      else if (num < 0) {
          return('Negative number');
      }
      else {
        var result = 1;
      for (i=1; i <= num; i+=1)
          {
             result = result * i;
          }
      return (result);
      }
    }
    console.log (factorial(6));
    module.exports = factorial;