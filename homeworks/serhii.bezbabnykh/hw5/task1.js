/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

 const encrypt = (text, n) => {
     return
 };

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    let inputArray = encryptedText.split('');
    

    function cript() {
        let evenArray = [];
        let oddArray = [];

        for (let i = 0; i < inputArray.length; i++) {
            if (i % 2 > 0) {
                evenArray.push(inputArray[i]);
            }
        }
    
        for (let i = 0; i < inputArray.length; i++) {
            if (i % 2 === 0) {
                oddArray.push(inputArray[i]);
            }
        }
    
        let evenArraystr = evenArray.join('');
        let oddArraystr = oddArray.join('');
        inputArray = evenArraystr + oddArraystr;    
    }

    while (n) {
        cript();
        n--;
    }

    console.log(inputArray);
    return;
}

decrypt('This is a test!', 2);

module.exports = { encrypt , decrypt };
