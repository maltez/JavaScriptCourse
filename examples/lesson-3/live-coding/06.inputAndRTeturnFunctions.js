var calc = function(a, b, fn) {
    return fn(a, b);
};

var sum = function(first, second) {
    return first + second;
};

var min = function(first, second) {
    return first - second;
}

console.log(calc(2, 2, sum));
console.log(calc(2, 2, min));

var getOperation = function(str) {
    var sum = function(first, second) {
        return first + second;
    };
    
    var min = function(first, second) {
        return first - second;
    }

    return str === 'sum' ? sum : min;
};

console.log(getOperation('sum')(2,2));