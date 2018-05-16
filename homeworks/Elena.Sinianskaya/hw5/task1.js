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


/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

}

module.exports = { encrypt , decrypt };
