/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
    if(text === null || text === '' || n <= 0){
        return text;
    }
    
    let str = text.split('');
    let newStr = '';
    let everySecondChar = [];
    let everyNosecondChar = [];

    for(let i = 0; i < n; i += 1){
        everySecondChar = str.filter(function(item, index) {
            return index % 2 !== 0;
        });
        everyNosecondChar = str.filter(function(item2, index2) {
            return index2 % 2 === 0;
        });
        str = everySecondChar.concat(everyNosecondChar);
    }
    return newStr = str.join('');
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if(encryptedText === null || encryptedText === '' || n <= 0){
        return encryptedText;
    }
    let str = encryptedText.split('');
    let newStr = '';

    for(let i = 0; i < n; i += 1){
        str = getDecrypt(str);
    }

    function getDecrypt(array){
        let curArr = array;
        let newArr = [];
        let ln = Math.floor(curArr.length / 2);
        let oddArr = curArr.slice(ln);
        let evenArr = curArr.splice(0, ln);

        for(let i = 0; i < oddArr.length; i += 1){
            let oddItem = oddArr[i];
            let evenItem = evenArr[i];
            newArr.push(oddItem, evenItem);
        }

        if(newArr.length > curArr.length){
            newArr.pop();
        } 

        return newArr;
    }

    return newStr = str.join('');
}

module.exports = { encrypt , decrypt };
