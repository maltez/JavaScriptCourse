let mass = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
function isPositive(num) {
    if (num >= 0) {
        return true;
    } else {
        return false;
    }
}
let newmass = [];
for (let i = 0; i <= mass.length; i++) {
    if (isPositive(mass[i])) {
        newmass.push(mass[i]);
    }
}
console.log(newmass);
