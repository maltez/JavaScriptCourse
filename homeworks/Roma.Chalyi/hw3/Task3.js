/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

 function isPolindrome(input) {

    input = input.toLowerCase();        // register change
     var count = input.length;

     for (i = 0; i< count; i++){

         if( input[i] === input[count - 1]){
            count = count - 1;
         }
         else{
             return false;
         }
     }

return true;
}
console.log(isPolindrome('Acssba'));  


