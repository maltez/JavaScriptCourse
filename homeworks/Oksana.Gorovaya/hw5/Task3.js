const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(integers));

function createPhoneNumber(integers) {
    if (integers.length < 10) {
        return 'invalid number: phone number should have 10 integers';
    }
    let firstBunch = integers.slice(0, 3).join('');
    let secondBunch = integers.slice(3, 6).join('');
    let thirdBunch = integers.slice(6, 10).join('');
    return '(' + firstBunch + ')' + ' ' + secondBunch + '-' + thirdBunch;
}