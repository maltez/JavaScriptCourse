/*
Дан массив
var a = ['abc', 'cba', 'bac', 'cc', 'cc', 'q', 'qa', 'cc'];
отсортировать его в массивы по аннограмам
    ['abc', 'cba', 'bac']
    ['cc', 'cc', 'cc']
    ['q']
    ['qa']
*/

var sort = input => {
if(typeof input !== 'object'){
    return;
}

var sort;
var obj = [];
var obj1 = [];
var arr1 = [];
var repeat = [];
var arr = [];

for(var i = 0; i < input.length; i += 1){
    sort = input[i].toLowerCase().split('').sort().join('');
    obj.push(sort);
    obj1.push(sort);
    var str = obj[i];

    for (var j = 0; j < obj.length; j += 1) {
     if (repeat[j] === str) {
         obj.splice(i, 1)
     }
     repeat.push(str);
    }
}  

for (var i = 0; i < obj.length; i += 1) {
    var arr = [];

    for(var j = 0; j < obj1.length; j += 1){
         
        if(obj[i] === obj1[j]){

            arr.push(input[j]);
            obj1[j] = undefined;

        }

    }
            if(arr.length !== 0){
                arr1.push(arr);
            }
}

return arr1;
}
console.log(sort(['abc', 'cba', 'bac', 'cc', 'cc', 'q', 'qa', 'cc']));