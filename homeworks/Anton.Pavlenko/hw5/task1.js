/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */
 const encrypt = (text, n) => {
    if(text===null||text===''){
        return text;
    }
    if(n<=0){
        return text;
    }
    for(var j=0;j<n;j++){
        var arr = text.split('');
        var arr1=[];
        var arr2=[];
        for(var i=0; i<arr.length; i++){
            if(i%2){
                arr2.push(arr[i]);
            }
            else{
                arr1.push(arr[i]);
            }
        }
         text = arr2.join('')+arr1.join('');
    }
    return text;
 };

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if(encryptedText===null||encryptedText===''){
        return encryptedText;
    }
    if(n<=0){
        return encryptedText;
    }
    for(var j=0;j<n;j++){
        var arr = encryptedText.split('');
        var arr1=[];
        var arr2=[];
        var interval;
        if(!arr.length%2){
            interval=arr.length+1;
        }
        else{
            interval=arr.length-1;
        }
        for(var i=0; i<arr.length; i++){
            if(i<interval/2){
                arr2.push(arr[i]);
            }
            else{
                arr1.push(arr[i]);
            }
        }
        var decryptArr=[];
        for (var i=0;i<arr.length;i++){
            decryptArr.push(arr1[i]);
            decryptArr.push(arr2[i]);
        }
        encryptedText = decryptArr.join('');
    }
    return encryptedText
}
module.exports = { encrypt , decrypt };
