var str;
console.log(str); // undefined 

str = 'My name';
console.log(typeof str); // string

str = 12;
console.log(typeof str); // number

str = true;
console.log(typeof str); // string

str = Symbol.iterator;
console.log(typeof str); // symbol

str = {};
console.log(typeof str); // object

str = null;
console.log(typeof str); // object

str = function() {};
console.log(typeof str); // function 