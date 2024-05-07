function checkCount(arr) {
  return arr.reduce((count, currVal) => {
    console.log(count[currVal]);
    count[currVal] = (count[currVal] || 0) + 1;
    return count;
  }, {});
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4];
console.log(checkCount(arr));
