/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */


 function hourQuoter (minute) {
     
if (typeof minute === 'number') {
    switch (true) {
        case (minute >= 0 && minute <= 14):
            return ('First quarter of an hour');
        case (minute >= 15 && minute <= 29 ):
            return ('Second quarter of an hour');
        case (minute >= 30 && minute <= 44):
            return ('Third quarter of an hour');
        case (minute >= 45 && minute <= 59):
            return ('Fourth quarter of an hour');
        }
    } else {
        return console.log ('Please enter number from 0 till 59');
    }
} 

console.log(hourQuoter());

module.exports = hourQuoter;
