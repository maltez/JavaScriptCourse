let hours = 0;
let result = task3_function (hours);
console.log(result);
function task3_function (hours) {
    if (isNaN(hours)) {
        return 'Please use numbers here';
    }
    if (hours < 0) {
        return 'Please use positive numbers only';
    }
    hours = hours * 3600;
    return hours;
}