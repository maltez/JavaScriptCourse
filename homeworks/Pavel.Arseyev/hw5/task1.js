var arr = ['some', 365, 42, true, {a:215}];

//добавляет в конце
function myPush(arr, content){
  arr[arr.length] = content;

  return arr;
}

// console.log(myPush(arr, 'запушил'));

//удаляет в конце
function myPop(arr){
  let newArr = [];

  for(let i = 0; i < arr.length-1; i++){
    newArr[i] = arr[i];
  }

  return newArr;
}

// console.log(arr);
// console.log(myPop(arr));

//Добавляет в начале
function myUnshift(arr, content){
  let newArr = [content];

  for(let i = 0; i < arr.length; i++){
    newArr[i+1] = arr[i];
  }

  return newArr;
}

// console.log(arr);
// console.log(myUnshift(arr, 'добавил'));

//удаляет в начале
function myShift(arr){
  let newArr = [];

  for(let i = 1; i < arr.length; i++){
    newArr[i-1] = arr[i];
  }

  return newArr;
}

console.log(arr);
console.log(myShift(arr));