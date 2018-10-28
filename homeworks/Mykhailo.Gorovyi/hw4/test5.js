let a = [1, 2, 0, 0, 3, 0, 4, 0, 5, 0, 0, 6, 0, 7];
function Zero(b) {
    for (let i = b.length - 1; i >= 0; i--) {
        if (b[i] === 0) {
            b.splice(i, 1);
            b.push(0);
        }
    }
    return b;
}
console.log(Zero(a));

