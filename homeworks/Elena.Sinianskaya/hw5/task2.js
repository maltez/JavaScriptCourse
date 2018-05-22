/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
  let squareItem = array2.map((item, i)=>{
    return item = Math.sqrt(item);
})
  let sortSquare = squareItem.sort();
  let sortArr1 = array1.sort();
  let compareFn = (arr1, arr2)=>{
    for (let i=0; i<arr1.length; i+=1){
       return (arr1[i]===arr2[i])
     }
  }
  return compareFn(sortSquare, sortArr1)
}

// 2)
// const comp = (array1, array2) => {
//   let test = array2.map(function(item, i){
//      return item = Math.sqrt(item);
//   })
//   for (let b = 0; b<array1.length; b+=1){
//     return test.includes(array1[b])
//   }
//   return test
// }

module.exports = comp;
