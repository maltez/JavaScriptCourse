var arr = [1,'string', [1, 2], true, {}, null, 1, 3, 4, 5, false, {}, null];
console.log(arr.length);

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1[0];// 1
//arr1[5]; // Error RangeError
arr1[100] = 16;
console.log(arr1.length);

//console.log(arr.join(', '));
//console.log(arr.indexOf(false));
//console.log(arr1.splice(2));
//console.log(arr.slice(-2, 4));

for(var i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
}

console.log('-------------------')

arr1.forEach(function(item) {
    console.log(item);
});


const arrModify = arr1.map((item) => item * 2 );
console.log(arrModify)
const filterArr = arr.filter((item) => {
    return typeof item === 'number';
});
console.log(filterArr);

const sum = filterArr.reduce((accumulator, item) => {
    return accumulator += item;
}, 100500);
console.log(sum);

const num = arr.find((item) => {
    return typeof item === 'string';
});

console.log(num);
 console.log(arr.concat([4,5,6]));

 //arr = []
 arr.fill(0);
 console.log(arr);
 arr.
 