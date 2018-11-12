var b = {};
var one = [];
var two = [];
var three = [];
var a = ['abc', 'bac', 'cba', 'cab', 'cc', 'cc', 'qc', 'q', 'q', 'qa', 'cc'];
for (i=0; i<a.length; i+=1) {
    var c = a[i].split('');
    if (c[0] !== c[1] && c.length>2) {
        one.push(a[i]);
        
    }
    else if (c[0]===c[1] && c.length===2) {
        two.push(a[i]);
    }

    else if(c[i] = 'q' && c.length <= 2) {
        three.push(a[i]);
    }
}

b.arr1 = one;
var por = 'arr1';
b.arr2 = two;
var por2 = 'arr2';
b.arr3 = three;
var por3 = 'arr3';
console.log(b);