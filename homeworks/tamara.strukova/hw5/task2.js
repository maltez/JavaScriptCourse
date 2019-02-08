const popMethod = (someArr) => {

  let elemNum = someArr.length - 1;

  let newArr = [];

  for (let i = 0; i < (elemNum); i++){
    newArr[i] = someArr[i];
  }

  return ('the new array data is: \n' + newArr);


};


console.log(popMethod(['ata', 1, true, 'slon', 'koza']));
