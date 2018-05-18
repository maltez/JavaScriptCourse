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

const decrypt = function (encryptedText, n){
  if (typeof encryptedText !== 'string' || !encryptedText) {
       return encryptedText;
   }
  
  function fn() {
   let arrText = encryptedText.split('');
   let firstPart = arrText.slice (0, (arrText.length/2));
   let secondPart = arrText.slice ((arrText.length/2), (arrText.length));
   let finalArray = [];
   for(let h = 0; h<(firstPart.length)+1; h+=1){
     finalArray.push(secondPart[h], firstPart[h])//запушить в новый массив элементы через один (один элемент с одного массива, другой - с другого)
   }
  
   return finalArray
   }
 let getArr =  fn()
 return  getArr.join('')
}





/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

}

module.exports = { encrypt , decrypt };
