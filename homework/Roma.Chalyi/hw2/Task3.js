/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

function secondsCount(hours) {
    let seconds;

    if (typeof (hours) === 'number'){

        seconds = hours*60*60 + " seconds";
    }

    else {
        seconds = 'please enter a numeric value';
    }

    return seconds;
}
console.log(secondsCount(5));