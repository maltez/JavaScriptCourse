let text = 'This is a test!';
let n = 6;
const encryptedText = encrypt(text, n);
console.log(encryptedText);
const decryptedText = decrypt(encryptedText, n, text);
console.log(decryptedText);

function encrypt(text, n) {
    let newArray = text.split([,]);

    for (i = 1; i <= n; i++) {
        let oddNumbers = [];
        let evenNumbers = [];
        for (r = 0; r < newArray.length; r++) {
            if (r % 2 > 0) {
                oddNumbers.push(newArray[r]);
            } else {
                evenNumbers.push(newArray[r]);
            }
        }
        newArray = (oddNumbers.join('') + evenNumbers.join('')).split([,]);
        newArray =  newArray.join('');
    }
    return newArray;
}
function decrypt(encryptedText, n, text) {
    while (encryptedText !== text) {
        encryptedText = encrypt(encryptedText, n);
    }
    let decryptedText = encryptedText;
    return decryptedText;
}
    
