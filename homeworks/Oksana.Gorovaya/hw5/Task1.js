let text = 'This is a test!';
let n = 6;
const encryptedText = encrypt(text, n);
console.log(encryptedText);
const decryptedText = decrypt(encryptedText, n);
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
function decrypt(encryptedText, n) {
    let encryptedPart1 = encryptedText.split([,]).slice(0, encryptedText.length / 2);
    console.log(encryptedPart1);
    let encryptedPart2 = encryptedText.split([,]).slice(encryptedText.length / 2);
    console.log(encryptedPart2);
    let newArray = joinArrays(encryptedPart1, encryptedPart2);

    function joinArrays(encryptedPart1, encryptedPart2) {
        let newArray = [];

        for (i = 0; i < encryptedText.length / 2; i++) {
            newArray.push(encryptedPart1.shift());
            newArray.push(encryptedPart2.shift());
        }
        console.log(newArray);

        return newArray;
    }
}
    
