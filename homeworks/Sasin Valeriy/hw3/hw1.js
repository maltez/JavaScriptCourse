function negativeFilter(input) {
    var newArray = [];

    for (var i = 0; i < input.length; i++) {

        if (isPositive(input[i])) {
            newArray.push(input[i]);
        }
    }
    return newArray;
}
function isPositive(input) {

    return input % 2 == 0;           // Home work 3.1
}


alert(negativeFilter([1, 4, 9, 8, 7, 2]))   