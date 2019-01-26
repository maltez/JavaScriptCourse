/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(item) {

    if(item > 0 && item < 10){      // auxiliary function
        return true;
    }
    else {
        return false;          
    }
};

function advancedFilter(input) {
    var newArray =  [];
   for(var i = 0; i < input.length; i++) {

       if(typeof input[i] === 'number') {
           if (isNumberInRange(input[i])) {

               newArray.push(input[i]);
           }
           else {
               continue;
           }
       }
   }

    return newArray;
};
console.log(advancedFilter([1, 76, 3, 'items', 0, 4, 44, 5, 6, -1, -22, 7, true]));

//module.exports = advancedFilter;