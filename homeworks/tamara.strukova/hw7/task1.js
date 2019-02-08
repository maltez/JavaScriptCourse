let numArray = [38, 56, 7, 12, 11, 90, 77, 42, 23, 13, 56, 17];
let temp;

function bubbleSort(someArray) {
  if (someArray === null || someArray === 0)
    return 'Please, put an array to sort';

  for (let i = 0; i < someArray.length; i++){
    for (let j = 0; j < someArray.length; j++){
      if (someArray[i] < someArray[j]){
        temp = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = temp;

        // console.log('z =', i);
        // console.log('j =', j);
      }
    }
  }
}

bubbleSort(numArray);

console.log(numArray);
