/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {
    let squareItem = array2.map((item, i)=>{
      return Math.sqrt(item);
    })
    let sortSquare = squareItem.sort();
    let sortArr1 = array1.sort();
    let compareFn = (arr1, arr2)=>{
      for (let i=0; i<arr1.length; i+=1){
        for (let r=0; r<arr2.length; r+=1){
          return (arr1[i]===arr2[r])
       }
      }
    }
    return compareFn(sortSquare, sortArr1)
}

module.exports = comp;
