/**
 * Create phone number inut array of numbers return phone strings.
 * @param {Array<number>} input
 * @returns {string} Returns phone strings.
 */
const createPhoneNumber = (input) => {
    if (!input || Array.isArray(input) === false || input.length !== 10) {
      return "Sorry, something goes wrong"
    }
    let numberArr = [];
    for (let i = 0; i<input.length; i+=1){
      if(typeof(input[i]) == "number"){
        numberArr.push(input[i])
      }
      else {
        return NaN
      }
    }
    let numberStr = numberArr.join('');
   
    let firstArr = "(" + numberStr.slice(0, 3) + ") ";
    let secondPart = numberStr.slice(3, 6) +"-";
    let thirdPart = numberStr.slice(6, 10);
    
    let phoneNumber = (firstArr.concat(secondPart).concat(thirdPart));
    return phoneNumber
  }

module.exports = createPhoneNumber;
