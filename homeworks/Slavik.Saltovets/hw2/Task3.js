function secondsCount(hours) {
    if(typeof(hours) === 'number'){
        return hours*360;
    }

}

console.log(secondsCount(5));
module.exports = secondsCount;
