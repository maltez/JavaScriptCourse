@ -0,0 +1,8 @@
/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
  var newString = [];
  if (typeof input !== "number"){
    return;
  }else if (input<1) {
    for (var i = 1; i >= input; i--){
     newString.push(i);
   }
  }else{
    for(var i = 1; i <= input; i++){
      newString.push(i);
    }
  }
   return newString.join(",");
 }

  module.exports = stringBuilder;
