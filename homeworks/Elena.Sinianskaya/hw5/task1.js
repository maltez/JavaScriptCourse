/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = function (text, n){
  if (typeof text !== 'string' || !text){
    return "This is a test!"
  }
  let textArr = text.split('');
  let determineEven = function(item, i){
      return (i%2==0)
    };
  let determineUneven = function(item, i){
      return (i%2!==0)
  };
  
   for (let i = 0; i < n; i+=1){
      textArr = textArr.filter(determineUneven).concat(textArr.filter(determineEven))
  }
  return textArr.join('')
}

const decrypt = (encryptedText, n) => {
  if (typeof encryptedText !== 'string' || !encryptedText) {
       return encryptedText;
   }
   let arrText = encryptedText.split('');
   function getFinalArr() {
       const firstPart = arrText.slice(0, arrText.length / 2);
       const secondPart = arrText.slice(arrText.length / 2);
       
       const finalArray = [];
       for (let i = 0; i < secondPart.length; i += 1) {
           finalArray.push(secondPart[i], firstPart[i]);
       }
       if (finalArray.length > arrText.length) { 
           finalArray.pop();
       }
       arrText = finalArray;
       return arrText;
  
    }
   for (let j = 0; j < n; j += 1) {
       getFinalArr();
   }
   return arrText.join('');
 };




/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

}

module.exports = { encrypt , decrypt };
