var a = '12';
console.log(typeof +a);
console.log(typeof +'12');

var i = 0;
i += 2;
++i;
console.log(i);

if (a) {
    console.log('There!');
}

var k = 2;
var z = '2';
console.log(k == z);

k = true;
z = 1;
console.log( k == z);

var k = 2;
var z = '2';
console.log(k === z);

const l = 12;
console.log(typeof !!l);

let a = z === 1 ?  5 : 42;
/*if (z === 1) {
    a = 5;
} else {
    a = 42;
}*/

var counter = 0;
counter ++;
// counter = counter + 1;