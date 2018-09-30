/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(num) {
    var arr = [];
    if(isNaN(num)|| num===''){
      return('Its not a number');
    } 
    else if (num >= 1) {
    for (i=1; i <= num; i+=1)
        {
            arr .push (i);
        }
        return(arr);
    }
    else  {
        for (i=1; i >= num; i-=1)
            {
             arr .push (i);
            }
        return(arr);
        }
    };
        console.log (stringBuilder(3));
        module.exports = stringBuilder;

    