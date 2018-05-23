const a = {
    a : 1,
    b: 100500
};

const z = function(a1, b1) {
    return this.a + this.b + a1*b1;
};

const n = z.apply(a, [2, 3]);
console.log(n);