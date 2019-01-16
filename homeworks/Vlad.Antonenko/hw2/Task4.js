/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {

    var reminder = first % second;

    if (remainder == 0){
        return true;

    }else {
        return false
    }
}

//Second way to complete the task

function isDevided(first, second) {
    return first%second ? false : true;
}

console.log(isDevided(10, 2));

module.exports = isDevided;
