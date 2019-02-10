const filter = (array, callBack) => {
  return array.reduce((arr, item) => {
    if (callBack(item)) {
      arr.push(item);
    }
    return arr;
  }, []);
};
const map = (array, callBack) => {
  return array.reduce((arr, item) => {
    arr.push(callBack(item));
    return arr;
  }, []);
};
const sort = (array, callBack) => {
  return array.reduce((arr, item) => {
    arr.push(item);
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        if (callBack(arr[i], arr[i + 1]) > 0) {
          isSorted = false;
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }, []);
};
