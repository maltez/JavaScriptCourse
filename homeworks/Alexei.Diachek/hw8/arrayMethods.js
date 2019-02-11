// implementation of method Array.prototype.filter using Array.prototype.reduce
const filter = (array, callBack) => {
  if (!Array.isArray(array) || typeof callBack !== 'function') {
    return false;
  }
  return array.reduce((arr, item) => {
    if (callBack(item)) {
      arr.push(item);
    }
    return arr;
  }, []);
};

// implementation of method Array.prototype.map using Array.prototype.reduce
const map = (array, callBack) => {
  if (!Array.isArray(array) || typeof callBack !== 'function') {
    return false;
  }
  return array.reduce((arr, item) => {
    arr.push(callBack(item));
    return arr;
  }, []);
};

// implementation of method Array.prototype.sort using Array.prototype.reduce
const sort = (array, callBack) => {
  if (!Array.isArray(array) || typeof callBack !== 'function') {
    return false;
  }
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
