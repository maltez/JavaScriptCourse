let x = 56;
let y = 32;
nod(x, y)
let resoult = nod(x, y);
console.log(resoult);
function nod(x, y) {
    while (y != 0) [ x, y ] = [ y, x%y ];
    return x;
}