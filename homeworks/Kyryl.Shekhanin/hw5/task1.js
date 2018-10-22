


/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {


    if (text === null) {
        return text;
    }
    else if (text === '') {
        return text;
    }
    else if (n <= 0) {
        return text;
    }

    var textArray;
    var leftSubstr;
    var rightSubstr;

    for (var counter = 0; counter < n; counter += 1) {

        textArray = text.split('');
        leftSubstr = '';
        rightSubstr = '';

        for (var i = 0; i < textArray.length; i += 1) {
            if (!(i % 2)) {
                rightSubstr += textArray[i];
            } else {
                leftSubstr += textArray[i];
            }
        }
        text = leftSubstr + rightSubstr;
    }

    
     return text
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if (encryptedText === null) {
        return encryptedText;
    }
    else if (encryptedText === '') {
        return encryptedText;
    }
    else if (n <= 0) {
        return encryptedText;
    }

    var encryptedTextArray = encryptedText.split('');
    var tmpResultArray = [];
    tmpResultArray.length = encryptedText.length;


    for (var counter = 0; counter < n; counter += 1) {

        for (var i = 0; i < tmpResultArray.length; i += 1) {
            if (!(i % 2)) {
                tmpResultArray[i] = encryptedTextArray[Math.floor((encryptedTextArray.length + i) / 2)];
            } else {
                tmpResultArray[i] = encryptedTextArray[Math.floor(i / 2)];
            }
        }

        encryptedTextArray = tmpResultArray.slice();
    }


    var ResultStr = '';

    for (var i = 0; i < encryptedTextArray.length; i += 1) {
        ResultStr += encryptedTextArray[i];
    }

    return ResultStr
}

module.exports = { encrypt, decrypt };


var someText = "This is a test";
var someEncrypted = encrypt(someText, 2);
var someDecrypted = decrypt(someEncrypted, 2);


console.log("Text: " + someText);
console.log("Encrypted: " + someEncrypted);
console.log("Decrypted: " + someDecrypted);
console.log("Is correct: " + (someText === someDecrypted));

