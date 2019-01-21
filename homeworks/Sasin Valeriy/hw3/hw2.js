function isNumberInRange(input) {
    return input > 0 && input < 10;
}

function advancedFilter(input) {
    var newArray = [];


    input.forEach((item) => {
        if (isNumberInRange(item)) {
            newArray.push(item);
        }
    });
    return newArray;                       // Home Work 3.2
}
alert(isNumberInRange(14, 2, 4, 7, 9));