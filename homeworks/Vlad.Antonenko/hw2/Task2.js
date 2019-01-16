/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

function hourQuoter (minute) {

    if (typeof minute === 'number'){

        if (minute > 0 && minute <= 59){

            if ( minute > 0 && minute <= 15){
                return 'First quoter';

            }else if (minute > 15 && minute <= 30){
                return 'Second quoter';

            }else if (minute > 30 && minute <= 45){
                return 'Third quoter';

            }else {
                return 'Fourth quoter';
            }

        } else {
        return 'You enter incorrect value, please enter number from 0 to 59';
        }

    } else {
        return 'The value you entered in not a number, please enter a number';
    }
}

//Second way to complete the task

function hourQuoter (minute) {
    if (typeof minute === 'number'){
        if ( minute > 0 && minute <= 59){
        var step = 15;
        return Math.floor(minute / step + 1);
        } else {
        return 'You enter incorect value, please enter number from 0 to 59';
        }

    } else {
        return 'The value you entered is not a number, please enter a number';
    }
}

module.exports = hourQuoter;
