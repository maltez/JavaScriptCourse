function ff(n) {
    if (typeof n == 'number') {
        var result = '';
        if (n > 0) {
            for (var k = 1; k != n + 1; k++) {
                result += k + ','
            }
        }
        else {
            for (var k = 1; k != n - 1; k--) {
                result += k + ","
            }
        }
        return result = result.slice(0, -1);

    }
    else {
        return;
    }
}
alert(ff('10'))     // Home work 1 


function ff(min) {
    debugger;

    return parseInt(min / 15 + 1)
}


alert(ff(59))  //       Home work 2  


function ff(n) {
    debugger;
    if (typeof n == 'number') {
        return n * 60 * 60;
    }
    else {
        return;
    }
}
alert(ff(59))    // Home work 3 


function ff(n, m) {

    debugger;
    if (n % m == 0) {
        return true;
    }

    return false;

}
alert(ff(60, 27));  // Home work 4 


function ff(n, m) {

    debugger;

    return n % m == 0;

}
alert(ff(60, 20));   // Home work 4 



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