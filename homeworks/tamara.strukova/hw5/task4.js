const unshiftMethod = (someArr, newElem) => {

  let elemNum = someArr.length;

  let newArr = [newElem];

  for (let i = 0; i < elemNum; i++){
    newArr[i+1] = someArr[i];
  }

  return ('the new array data is: \n' + newArr);


};


console.log(unshiftMethod(['ata', 1, true, 'slon', 'koza'], 'weee'));
