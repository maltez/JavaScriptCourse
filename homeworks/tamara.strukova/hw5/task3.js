const shiftMethod = (someArr) => {

  let elemNum = someArr.length;

  let newArr = [];

  for (let i = 0; i < elemNum; i++){
    newArr[i-1] = someArr[i];
  }

  return ('the new array data is: \n' + newArr);


};


console.log(shiftMethod(['ata', 1, true, 'slon', 'koza']));
