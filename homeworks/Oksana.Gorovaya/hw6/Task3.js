let valueToCheck = '(123) 456-7890';
console.log(typeChecker (valueToCheck));

function typeChecker (valueToCheck) {
    if (valueToCheck.match(/^[a-z A-Z]+$/)) {
        return 'this is text!';
    } else if (valueToCheck.match(/^[0-9]+$/)) {
        return 'this is number!';
    } else if (valueToCheck.match(/^[a-zA-Z0-9._-]+[@][a-zA-Z0-9]+[.][a-zA-Z]+$/)) {
        return 'this is email!';
    } else if (valueToCheck.match(/^[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}$/)) {
        return 'this is phone number!';
    }
    return 'invalid input format: should be text, number, email or phone number!'
}