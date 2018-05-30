var obj = {};
var obj2 = new Object();
var obj3 = Object.create({});


var aa = obj;
aa.z = 12;
aa.f = 13;
obj.ll = 15;
console.log(obj);

var bb = obj;
bb.z = 50;

var fn = function(a) {
    a.z = 150;
}
var t = {z: 0}
fn(t);
console.log(t)
