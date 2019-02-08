/*
* implementing of the .push method manually
*
* @param {array}
* @param {element}
*
* */

const pushMethod = (someArr, elem) => {

  let elemNum = someArr.length;

  someArr[elemNum] = elem;

  return ('the new array data is: \n' + someArr);


};


console.log(pushMethod(['ata', 1, true, 'slon', 'koza'], 'nos'));
