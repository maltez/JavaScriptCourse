/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {

    if(input.length>10||input.length<10){
        return '';
    }
    for(var i=0;i<input.length;i++){
        if(input[i]<0||input[i]>9){
            return '';
        }
    }
    var phone=['('];
    for(var i=0;i<input.length;i++){
        phone.push(input[i]);
        if(i==2){
            phone.push(') ');
        }
        if(i==5){
            phone.push('-')
        }
    }
    var str = phone.join('');
    return str;
}
module.exports = createPhoneNumber;
