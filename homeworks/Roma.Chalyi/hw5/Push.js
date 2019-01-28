// the function adds an element to the end of the array

function addEnd (array, element) {
    if(Array.isArray(array)) {

        array[array.length] = element;
        return array;
    }

    return 'the function should take an array'
}
console.log(addEnd([35,564, 'fd', true], 'rtgf'));
