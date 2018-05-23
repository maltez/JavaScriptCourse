const a = {
    b: 1,
    c: 100500,
    fn: () => {
        console.log(this);
        return this.b + this.c
    }
}

function aaa () {
    this.a = 12;
    this.b = 14;
    return () => {
        console.log(this.a, this.b);
    }
}

const fn = aaa();
fn();

const superFn = a.fn;
console.log(a.fn())
console.log(superFn());