
let a = 56;
let b = 72;
let result = egcd(a, b);
egcd(a, b);
console.log(result);
function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
let x = 16;
let y = 8;
nok(x.y);
let resoult = nok(x,y);
console.log(nok(x,y));
function nok(x,y) {
    return (x / egcd(a, b) | 0) * y;
}
