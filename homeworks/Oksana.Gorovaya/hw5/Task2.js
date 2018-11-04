let a = [121, 144, 11, 161, 19, 144, 19, 11];
let tempSqrt = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
let b = [];
enabler(tempSqrt);
console.log(comp(a,b));

function enabler(tempSqrt) {
    tempSqrt.forEach(function(element) {
        b.push(Math.sqrt(element));
    });
}
function comp(a,b) {
    let randomVar = true;
    if (a && b === null) {
        return 'Insert valid numbers';
    }
    a.forEach(function(element) {
        if (b.includes(element) === false) {
            randomVar = false;
        }
    });
    return randomVar;
}