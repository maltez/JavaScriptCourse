/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber =(input) => {

    if (input.length !== 10){
        return false;
    }

    for (var i = 0; i < input.length; i += 1){
        if (typeof input[i] !== "number"){
            return false;
        } else if (input[i] < 0 || input[i > 9]){
            return false;
        } else {
            continue;
        }
    }

    var firstThree = input.splice(0, 3);
    var secondThree = input.splice(0, 3);

    var firstThreeNum = firstThree.join('');
    var secondThreeNum = secondThree.join('');
    var lastFourNum = input.join('');

    return ('(' + firstThreeNum + ')' + ' ' + secondThreeNum + '-' + lastFourNum);
  
}

module.exports = createPhoneNumber;
