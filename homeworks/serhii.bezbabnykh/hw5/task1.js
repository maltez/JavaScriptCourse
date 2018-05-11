/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

 const encrypt = (text, n) => {
    let inputArray = text.split('');
    

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

    if (n != 0) {
        while (n) {
            cript();
            n--;
        }
    } else {
        return text;
    }

    // console.log(inputArray);
    return;
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

    if (n != 0) {
        while (n) {
            cript();
            n--;
        }
    } else {
        return encryptedText;
    }

    // console.log(inputArray);
    return;
}

// decrypt('This is a test!', 0);

// encrypt('s eT ashi tist!', 0);

module.exports = { encrypt , decrypt };
