let min = 4;
let result = task2_function(min);


function task2_function(min) {
    if (isNaN(min)) {
        return 'This is not a number!';
    }
    if (min <= 15 && min >= 0) {
        return '1st quarter';
    } else if (min <= 30 && min > 15) {
        return '2nd quarter';
    } else if (min <= 45 && min > 30) {
        return '3rd quarter';
    } else if (min <= 59 && min > 45) {
        return '4th quarter';
    } else {
        return 'Use number range from 1 to 59 only!';
    }
}