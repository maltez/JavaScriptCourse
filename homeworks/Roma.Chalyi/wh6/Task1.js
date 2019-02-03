/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
    if(typeof(text) === 'string' && typeof(n) === 'number' ){
        if(text.trim() === ''){    
            return "empty line"
        }
        else if(n <= 0) {
            return text;
        }
        else {
            var result = text;
            for (var i = 0; i < n; i++){
                var secondChars = '';
                var otherChars = '';
                for (var a = 0; a < result.length; a++){
                    a % 2 ? secondChars +=result[a] : otherChars +=result[a];  
                }
                result = secondChars + otherChars;
            }
            return result;
        }
    }
    
    else if(typeof(n) === 'number'){
        return  text + ' not a string';
    }
    else {
        return  'parameter ' + 'n' + ' must be a number ';
    }
    
};
/*console.log(encrypt('This is a test!', 2)); */ 


/**
* String encription
* @param {string} text
* @param {number} n
* @returns {string} Returns Decrypted string.
*/

const decrypt = (encryptedText, n) => {
    if(typeof(encryptedText) === 'string' && typeof(n) === 'number' ){
        if(encryptedText.trim() === ''){
            return "empty line"
        }
        else if(n <= 0) {
            return encryptedText;
        }
        
        for (var i = 0; i < n; i++){
            var result = '';
            if(encryptedText.length % 2) {                              //find the first char
                var count = Math.floor(encryptedText.length / 2);  
            }
            else {
                var count = encryptedText.length / 2;
            }
            var count2 = 0;
            for (var a = 0; a < encryptedText.length; a++){
               if(a % 2) {
                   result += encryptedText[count2];
                   count2++;
               }
               else {
                result+= encryptedText[count];
                count ++;
               }
            }
            encryptedText = result; 
        } 
        return result;
    }
    
    else if(typeof(n) === 'number'){
        return  encryptedText + ' not a string'
    }
    else {
        return  'parameter ' + 'n' + ' must be a number '
    }
}
/*console.log(decrypt('s eT ashi tist!', 2));*/

module.exports = { encrypt , decrypt }; 

