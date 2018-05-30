var a = 12;
var b = 135;

function zorro() {
    var a = 34;
    console.log(a);
    b = 32;
}

console.log(a); // 12;
console.log(b); // 135;

zorro();
console.log(a); // 12;
console.log(b); // 32;