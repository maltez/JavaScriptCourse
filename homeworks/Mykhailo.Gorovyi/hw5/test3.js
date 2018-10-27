let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
createPhoneNumber(numbers);
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";

    for(let i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }
    let resoult = format;
    console.log(resoult);
    return format;
}
