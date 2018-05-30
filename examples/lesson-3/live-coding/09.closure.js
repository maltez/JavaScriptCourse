const counter = function() {
    let count = 0;

    return function() {
        return count += 1;
    }
};

const counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
const counter2 = counter();
console.log(counter2());