"use strict"
/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var revStr = '';
    input = input.toLowerCase();
    console.log(input);
    input = input.replace(/\s/g, '');
   if (input.length > 1) {
        for (var i = (input.length - 1); i >= 0; i--) {
            revStr += input[i];
        }
        if (revStr === input) {
            return true;             
        } 
        else {
            return false;
        }
        
    } else {
        return false;
    }
}

module.exports = isPolindrome;