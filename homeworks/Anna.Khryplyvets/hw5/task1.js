/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
    if (text === null || text === '' || n <= 0) {
        return text;
    }

    let str = text.split('');
    let everySecondChar = [];
    let everyNosecondChar = [];

    for (let i = 0; i < n; i += 1) {
        everySecondChar = str.filter((item, index) => index % 2 !== 0);
        everyNosecondChar = str.filter((item2, index2) => index2 % 2 === 0);
        str = everySecondChar.concat(everyNosecondChar);
    }
    return str.join('');
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if (encryptedText === null || encryptedText === '' || n <= 0) {
        return encryptedText;
    }

    let str = encryptedText.split('');
    function getDecrypt(array) {
        const curArr = array;
        const newArr = [];
        const ln = Math.floor(curArr.length / 2);
        const oddArr = curArr.slice(ln);
        const evenArr = curArr.splice(0, ln);

        for (let i = 0; i < oddArr.length; i += 1) {
            const oddItem = oddArr[i];
            const evenItem = evenArr[i];
            newArr.push(oddItem, evenItem);
        }

        if (newArr.length > curArr.length) {
            newArr.pop();
        }

        return newArr;
    }

    for (let i = 0; i < n; i += 1) {
        str = getDecrypt(str);
    }
    return str.join('');
};

module.exports = { encrypt, decrypt };
