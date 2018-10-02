let arr1 = [-8,2,0,4];
let result = arr_function(arr1);
console.log(result);

function arr_function(arr1) {
    let positive = [];
    for (let x = 0; x <= arr1.length -1; x++) {
        if (isPositive(arr1[x])) {
            positive.push(arr1[x]);
        }
    }
    return positive;
}

function isPositive(number) {
    if (number > 0) {
        return true;
    }
    return false;
}
